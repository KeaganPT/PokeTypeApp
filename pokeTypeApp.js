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
const resultsDiv = document.querySelector(".searchResult");
const image = document.querySelector("img");

//hide image
image.style.display = "none"

const sections = document.querySelectorAll("section")

//event listener for searching the type typed in. (stretch goal is to show the result divs only when search is submitted).
searchForm.addEventListener('submit', fetchType);

function fetchType(e){
    e.preventDefault();
    url = baseURL + 'type/' + searchItem.value.toLowerCase();
    console.log(url);
    
    console.log(searchItem.value);

    displayImg(searchItem.value.toLowerCase());

    fetch(url)
        .then(function(result){
            return result.json();
        }) .then(function(json) {
            console.log(json);
            displayTypes(json);
        });
    searchItem.value = '';
}

function displayImg(searchTerm){
    let imgURL = baseURL + 'pokemon/';
        
        switch (searchTerm){
            case 'normal': 
            fetch(`${imgURL}snorlax`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                })
                break;
            case 'fighting':
                fetch(`${imgURL}riolu`)
                    .then(function(pokemon){
                        return pokemon.json();
                    }) .then(function(imgJson) {
                        console.log(imgJson);
                        image.src = imgJson.sprites.front_default;
                        image.style.display = "inline-block";
                    })
                break;
            case 'flying': 
            fetch(`${imgURL}rookidee`)
            .then(function(pokemon){
                return pokemon.json();
            }) .then(function(imgJson) {
                console.log(imgJson);
                image.src = imgJson.sprites.front_default;
                image.style.display = "inline-block";
            })
                break;
            case 'poison': 
                fetch(`${imgURL}gulpin`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                })
                break;
            case 'ground':
                fetch(`${imgURL}mudsdale`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'rock':
                fetch(`${imgURL}rockruff`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'bug':
                fetch(`${imgURL}kricketune`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'ghost':
                fetch(`${imgURL}duskull`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'steel':
                fetch(`${imgURL}melmetal`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'fire':
                fetch(`${imgURL}cyndaquil`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'water':
                fetch(`${imgURL}totodile`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'grass':
                fetch(`${imgURL}skiddo`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'electric':
                fetch(`${imgURL}boltund`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'psychic' :
                fetch(`${imgURL}wobbuffet`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'ice' :
                fetch(`${imgURL}vanillish`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'dragon' :
                fetch(`${imgURL}druddigon`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'dark' :
                fetch(`${imgURL}zorua`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            case 'fairy':
                fetch(`${imgURL}florges`)
                .then(function(pokemon){
                    return pokemon.json();
                }) .then(function(imgJson) {
                    console.log(imgJson);
                    image.src = imgJson.sprites.front_default;
                    image.style.display = "inline-block";
                });
                break;
            default: 
                image.style.display = "none";
        }
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
    
    //declaring span for results
    // let span = document.createElement("span"); //! KEAGAN WHY AND PLEASE CLEAN 

    //Function for checking the type and giviing it a background color (forgive me those who must read my cursed code)
    // function styleType(typeName) {
        
    //     switch (typeName){
    //         case 'normal': 
    //             span.style.backgroundColor = "#a8a878";
    //             break;
    //         case 'fighting':
    //             span.style.backgroundColor = "#c03028";
    //             break;
    //         case 'flying': 
    //             span.style.backgroundColor = "#a890f0";
    //             break;
    //         case 'poison': 
    //             span.style.backgroundColor = "#a040a0";
    //             break;
    //         case 'ground':
    //             span.style.backgroundColor = "#e0c068";
    //             break;
    //         case 'rock':
    //             span.style.backgroundColor = "#b8a038";
    //             break;
    //         case 'bug':
    //             span.style.backgroundColor = "#a8b820";
    //             break;
    //         case 'ghost':
    //             span.style.backgroundColor = "#705898";
    //             break;
    //         case 'steel':
    //             span.style.backgroundColor = "#b8b8d0";
    //             break;
    //         case 'fire':
    //             span.style.backgroundColor = "#f08030";
    //             break;
    //         case 'water':
    //             span.style.backgroundColor = "#6890f0";
    //             break;
    //         case 'grass':
    //             span.style.backgroundColor = "#6890f0";
    //             break;
    //         case 'electric':
    //             span.style.backgroundColor = "#f8d030";
    //             break;
    //         case 'psychic' :
    //             span.style.backgroundColor = "#f85888";
    //             break;
    //         case 'ice' :
    //             span.style.backgroundColor = "#98d8d8";
    //             break;
    //         case 'dragon' :
    //             span.style.backgroundColor = "#7037f8";
    //             break;
    //         case 'dark' :
    //             span.style.backgroundColor = "#705848";
    //             break;
    //         case 'fairy':
    //             span.style.backgroundColor = "#ee99ac";
    //     }

    // }


    //for loop createing span tags for double damage against these types
    for(type of doubleDamageTo){
        // console.log("Double Damage To:",type);
        let span = document.createElement("span");        
            switch (type.name){
                case 'normal': 
                    span.style.backgroundColor = "#a8a878";
                    break;
                case 'fighting':
                    span.style.backgroundColor = "#c03028";
                    break;
                case 'flying': 
                    span.style.backgroundColor = "#a890f0";
                    break;
                case 'poison': 
                    span.style.backgroundColor = "#a040a0";
                    break;
                case 'ground':
                    span.style.backgroundColor = "#e0c068";
                    break;
                case 'rock':
                    span.style.backgroundColor = "#b8a038";
                    break;
                case 'bug':
                    span.style.backgroundColor = "#a8b820";
                    break;
                case 'ghost':
                    span.style.backgroundColor = "#705898";
                    break;
                case 'steel':
                    span.style.backgroundColor = "#b8b8d0";
                    break;
                case 'fire':
                    span.style.backgroundColor = "#f08030";
                    break;
                case 'water':
                    span.style.backgroundColor = "#6890f0";
                    break;
                case 'grass':
                    span.style.backgroundColor = "#78c850";
                    break;
                case 'electric':
                    span.style.backgroundColor = "#f8d030";
                    break;
                case 'psychic' :
                    span.style.backgroundColor = "#f85888";
                    break;
                case 'ice' :
                    span.style.backgroundColor = "#98d8d8";
                    break;
                case 'dragon' :
                    span.style.backgroundColor = "#7037f8";
                    break;
                case 'dark' :
                    span.style.backgroundColor = "#705848";
                    break;
                case 'fairy':
                    span.style.backgroundColor = "#ee99ac";
            }
        span.style.color = 'white';
        span.innerText += type.name + '';
        paraDDamageTo.appendChild(span);
    }

    //for loop creating span tags for haalf damage against these types
    for(type of halfDamageTo){
        // console.log("Half Damage To:",type);
        let span = document.createElement("span");            
            switch (type.name){
                case 'normal': 
                    span.style.backgroundColor = "#a8a878";
                    break;
                case 'fighting':
                    span.style.backgroundColor = "#c03028";
                    break;
                case 'flying': 
                    span.style.backgroundColor = "#a890f0";
                    break;
                case 'poison': 
                    span.style.backgroundColor = "#a040a0";
                    break;
                case 'ground':
                    span.style.backgroundColor = "#e0c068";
                    break;
                case 'rock':
                    span.style.backgroundColor = "#b8a038";
                    break;
                case 'bug':
                    span.style.backgroundColor = "#a8b820";
                    break;
                case 'ghost':
                    span.style.backgroundColor = "#705898";
                    break;
                case 'steel':
                    span.style.backgroundColor = "#b8b8d0";
                    break;
                case 'fire':
                    span.style.backgroundColor = "#f08030";
                    break;
                case 'water':
                    span.style.backgroundColor = "#6890f0";
                    break;
                case 'grass':
                    span.style.backgroundColor = "#78c850";
                    break;
                case 'electric':
                    span.style.backgroundColor = "#f8d030";
                    break;
                case 'psychic' :
                    span.style.backgroundColor = "#f85888";
                    break;
                case 'ice' :
                    span.style.backgroundColor = "#98d8d8";
                    break;
                case 'dragon' :
                    span.style.backgroundColor = "#7037f8";
                    break;
                case 'dark' :
                    span.style.backgroundColor = "#705848";
                    break;
                case 'fairy':
                    span.style.backgroundColor = "#ee99ac";
            }
        span.style.color = 'white';
        span.innerText += type.name + '';
        if(paraHDamageTo.childElementCount == 5){
            let linebreak = document.createElement('br');
            let linebreak2 = document.createElement('br');
            paraHDamageTo.appendChild(linebreak);
            paraHDamageTo.appendChild(linebreak2);
        }
        paraHDamageTo.appendChild(span);
    }

    //for loop creating span tags for Double damage recieved from these types
    for(type of doubleDamageFrom){
        // console.log("Double Damage From:",type);
        let span = document.createElement("span");
        switch (type.name){
            case 'normal': 
                span.style.backgroundColor = "#a8a878";
                break;
            case 'fighting':
                span.style.backgroundColor = "#c03028";
                break;
            case 'flying': 
                span.style.backgroundColor = "#a890f0";
                break;
            case 'poison': 
                span.style.backgroundColor = "#a040a0";
                break;
            case 'ground':
                span.style.backgroundColor = "#e0c068";
                break;
            case 'rock':
                span.style.backgroundColor = "#b8a038";
                break;
            case 'bug':
                span.style.backgroundColor = "#a8b820";
                break;
            case 'ghost':
                span.style.backgroundColor = "#705898";
                break;
            case 'steel':
                span.style.backgroundColor = "#b8b8d0";
                break;
            case 'fire':
                span.style.backgroundColor = "#f08030";
                break;
            case 'water':
                span.style.backgroundColor = "#6890f0";
                break;
            case 'grass':
                span.style.backgroundColor = "#78c850";
                break;
            case 'electric':
                span.style.backgroundColor = "#f8d030";
                break;
            case 'psychic' :
                span.style.backgroundColor = "#f85888";
                break;
            case 'ice' :
                span.style.backgroundColor = "#98d8d8";
                break;
            case 'dragon' :
                span.style.backgroundColor = "#7037f8";
                break;
            case 'dark' :
                span.style.backgroundColor = "#705848";
                break;
            case 'fairy':
                span.style.backgroundColor = "#ee99ac";
        }
        span.style.color = 'white';
        span.innerText += type.name + '';
        paraDDamageFrom.appendChild(span);
    }

    //for loop creating span tags for Half damage recieved from these types
    for(type of halfDamageFrom){
        // console.log("Half Damage From:",type);
        let span = document.createElement("span");
        switch (type.name){
            case 'normal': 
                span.style.backgroundColor = "#a8a878";
                break;
            case 'fighting':
                span.style.backgroundColor = "#c03028";
                break;
            case 'flying': 
                span.style.backgroundColor = "#a890f0";
                break;
            case 'poison': 
                span.style.backgroundColor = "#a040a0";
                break;
            case 'ground':
                span.style.backgroundColor = "#e0c068";
                break;
            case 'rock':
                span.style.backgroundColor = "#b8a038";
                break;
            case 'bug':
                span.style.backgroundColor = "#a8b820";
                break;
            case 'ghost':
                span.style.backgroundColor = "#705898";
                break;
            case 'steel':
                span.style.backgroundColor = "#b8b8d0";
                break;
            case 'fire':
                span.style.backgroundColor = "#f08030";
                break;
            case 'water':
                span.style.backgroundColor = "#6890f0";
                break;
            case 'grass':
                span.style.backgroundColor = "#78c850";
                break;
            case 'electric':
                span.style.backgroundColor = "#f8d030";
                break;
            case 'psychic' :
                span.style.backgroundColor = "#f85888";
                break;
            case 'ice' :
                span.style.backgroundColor = "#98d8d8";
                break;
            case 'dragon' :
                span.style.backgroundColor = "#7037f8";
                break;
            case 'dark' :
                span.style.backgroundColor = "#705848";
                break;
            case 'fairy':
                span.style.backgroundColor = "#ee99ac";
        }
        span.style.color = 'white';
        span.innerText += type.name + '';
        if(paraHDamageFrom.childElementCount == 5){
            let linebreak = document.createElement('br');
            let linebreak2 = document.createElement('br');
            paraHDamageFrom.appendChild(linebreak);
            paraHDamageFrom.appendChild(linebreak2);
        }
        paraHDamageFrom.appendChild(span);
    }

    //for loop creating span tags for NO damage against these types
    for(type of noDamageTo){
        // console.log("No Damage To:",type);
        let span = document.createElement("span");
        switch (type.name){
            case 'normal': 
                span.style.backgroundColor = "#a8a878";
                break;
            case 'fighting':
                span.style.backgroundColor = "#c03028";
                break;
            case 'flying': 
                span.style.backgroundColor = "#a890f0";
                break;
            case 'poison': 
                span.style.backgroundColor = "#a040a0";
                break;
            case 'ground':
                span.style.backgroundColor = "#e0c068";
                break;
            case 'rock':
                span.style.backgroundColor = "#b8a038";
                break;
            case 'bug':
                span.style.backgroundColor = "#a8b820";
                break;
            case 'ghost':
                span.style.backgroundColor = "#705898";
                break;
            case 'steel':
                span.style.backgroundColor = "#b8b8d0";
                break;
            case 'fire':
                span.style.backgroundColor = "#f08030";
                break;
            case 'water':
                span.style.backgroundColor = "#6890f0";
                break;
            case 'grass':
                span.style.backgroundColor = "#78c850";
                break;
            case 'electric':
                span.style.backgroundColor = "#f8d030";
                break;
            case 'psychic' :
                span.style.backgroundColor = "#f85888";
                break;
            case 'ice' :
                span.style.backgroundColor = "#98d8d8";
                break;
            case 'dragon' :
                span.style.backgroundColor = "#7037f8";
                break;
            case 'dark' :
                span.style.backgroundColor = "#705848";
                break;
            case 'fairy':
                span.style.backgroundColor = "#ee99ac";
        }
        span.style.color = 'white';
        span.innerText += type.name + '';
        para0To.appendChild(span);
    }

    //for loop creating span tags for NO damage recieved from these types
    for(type of noDamageFrom){
        // console.log("No Damage From",type);
        let span = document.createElement("span");
        switch (type.name){
            case 'normal': 
                span.style.backgroundColor = "#a8a878";
                break;
            case 'fighting':
                span.style.backgroundColor = "#c03028";
                break;
            case 'flying': 
                span.style.backgroundColor = "#a890f0";
                break;
            case 'poison': 
                span.style.backgroundColor = "#a040a0";
                break;
            case 'ground':
                span.style.backgroundColor = "#e0c068";
                break;
            case 'rock':
                span.style.backgroundColor = "#b8a038";
                break;
            case 'bug':
                span.style.backgroundColor = "#a8b820";
                break;
            case 'ghost':
                span.style.backgroundColor = "#705898";
                break;
            case 'steel':
                span.style.backgroundColor = "#b8b8d0";
                break;
            case 'fire':
                span.style.backgroundColor = "#f08030";
                break;
            case 'water':
                span.style.backgroundColor = "#6890f0";
                break;
            case 'grass':
                span.style.backgroundColor = "#78c850";
                break;
            case 'electric':
                span.style.backgroundColor = "#f8d030";
                break;
            case 'psychic' :
                span.style.backgroundColor = "#f85888";
                break;
            case 'ice' :
                span.style.backgroundColor = "#98d8d8";
                break;
            case 'dragon' :
                span.style.backgroundColor = "#7037f8";
                break;
            case 'dark' :
                span.style.backgroundColor = "#705848";
                break;
            case 'fairy':
                span.style.backgroundColor = "#ee99ac";
        }
        span.style.color = 'white';
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