baseURL= "https://pokeapi.co/api/v2/";
let url;

const searchForm = document.querySelector("form");
const searchItem = document.querySelector(".search");

const h3 = document.querySelector("h3");
const doubleDamToDiv = document.querySelector("#doubleDamageGiven");
const halfDamToDiv = document.querySelector("#halfDamageGiven");
const doubleDamFromDiv = document.querySelector("#doubleDamageTaken");
const halfDamFromDiv = document.querySelector("#halfDamageTaken");
const noDamToDiv = document.querySelector("#noDamTo");
const noDamFromDiv = document.querySelector("#noDamFrom");

const sections = document.querySelectorAll("section")

//event listener for searching the type typed in. (stretch goal is to show the result divs only when search is submitted).
searchForm.addEventListener('submit', fetchType);

function fetchType(e){
    e.preventDefault();
    url = baseURL + 'type/' + searchItem.value.toLowerCase();
    console.log(url);

    fetch(url)
        .then(function(result){
            return result.json();
        }) .then(function(json) {
            console.log(json);
            displayTypes(json);
        })
}

function displayTypes(json){

    //! NEED TO FIND A WAY TO CONDENCE WHILE LOOPS INTO 1 LOOK INTO REACHING INTO QUERYSELECTORALL!
    while(doubleDamToDiv.firstElementChild.nextElementSibling){
        doubleDamToDiv.removeChild(doubleDamToDiv.lastChild);
    }
    // console.log(doubleDamToDiv.firstElementChild.nextElementSibling);
    while(halfDamToDiv.firstElementChild.nextElementSibling){
        halfDamToDiv.removeChild(halfDamToDiv.lastChild);
    }

    while(doubleDamFromDiv.firstElementChild.nextElementSibling){
        doubleDamFromDiv.removeChild(doubleDamFromDiv.lastChild);
    }

    while(halfDamFromDiv.firstElementChild.nextElementSibling){
        halfDamFromDiv.removeChild(halfDamFromDiv.lastChild);
    }


    while(noDamToDiv.firstElementChild.nextElementSibling){
        noDamToDiv.removeChild(noDamToDiv.lastChild);
    }
    
    while(noDamFromDiv.firstElementChild.nextElementSibling){
        noDamFromDiv.removeChild(noDamFromDiv.lastChild);
    }

    while(h3.firstChild.nextSibling){
        h3.removeChild(h3.firstChild.nextSibling)
    }

    let resultName = document.createElement('p');
    resultName.innerText = json.name.toUpperCase();
    console.log(resultName);
    h3.appendChild(resultName);

    //json variables grabing the types related to search
    let doubleDamageTo = json.damage_relations.double_damage_to;
    // console.log(doubleDamageTo);
    let halfDamageTo = json.damage_relations.half_damage_to;
    // console.log(halfDamageTo);
    let doubleDamageFrom = json.damage_relations.double_damage_from;
    // console.log(doubleDamageFrom);
    let halfDamageFrom = json.damage_relations.half_damage_from;
    // console.log(halfDamageFrom);
    let noDamageTo = json.damage_relations.no_damage_to;
    //console.log("noDamageTo");
    let noDamageFrom = json.damage_relations.no_damage_from;
    // console.log(noDamageFrom);

    //creating p tags for each div of the results
    let paraDDamageTo = document.createElement('p');
    let paraHDamageTo = document.createElement('p');
    let paraDDamageFrom = document.createElement('p');
    let paraHDamageFrom = document.createElement('p');
    let para0To = document.createElement('p');
    let para0From = document.createElement('p');

    //for loop createing span tags for double damage against these types
    for(type of doubleDamageTo){
        // console.log("Double Damage To:",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        paraDDamageTo.appendChild(span);
    }

    //for loop creating span tags for haalf damage against these types
    for(type of halfDamageTo){
        // console.log("Half Damage To:",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        paraHDamageTo.appendChild(span);
    }

    //for loop creating span tags for Double damage recieved from these types
    for(type of doubleDamageFrom){
        // console.log("Double Damage From:",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        paraDDamageFrom.appendChild(span);
    }

    //for loop creating span tags for Half damage recieved from these types
    for(type of halfDamageFrom){
        // console.log("Half Damage From:",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        paraHDamageFrom.appendChild(span);
    }

    //for loop creating span tags for NO damage against these types
    for(type of noDamageTo){
        // console.log("No Damage To:",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        para0To.appendChild(span);
    }

    //for loop creating span tags for NO damage recieved from these types
    for(type of noDamageFrom){
        // console.log("No Damage From",type);
        let span = document.createElement("span");
        span.innerText += type.name + '';
        para0From.appendChild(span);
    }

    //Appending the finished p tags of the types to their respecctive divs
    doubleDamToDiv.appendChild(paraDDamageTo);
    halfDamToDiv.appendChild(paraHDamageTo);
    doubleDamFromDiv.appendChild(paraDDamageFrom);
    halfDamFromDiv.appendChild(paraHDamageFrom);
    noDamToDiv.appendChild(para0To);
    noDamFromDiv.appendChild(para0From);

    

}