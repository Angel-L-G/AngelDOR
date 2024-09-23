//import {Pokemon} from "./classes/Pokemon.js";

async function fetchPokemons() {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    let fetchedPokemons = await response.json();
    console.log(fetchedPokemons);
    let items = await fetchedPokemons.results;
    //let pokemons = [];

    items.forEach(poke => {
        //let p = new Pokemon(poke.name, poke.url);
        //pokemons.push(p);

        let htmlList = document.getElementById("items");
        let li = document.createElement("li");
        li.innerHTML = poke.name;
        htmlList.appendChild(li);
    });

    //console.log(pokemons);
}

fetchPokemons();

/*async function fetchdata(uri, resultType){
    let response = await fetch("https://pokeapi.co/api/v2/"+uri);
    let fetchedData = await response.json();
    let items;

    if(resultType === "pokemon"){
        items = await fetchedData.results;
    } else if(resultType === "type"){
        items = await fetchedData.pokemon;
    } else if(resultType === "generation"){

    } else if(resultType === "stats"){
    
    }

    return items;
}*/

async function setHtml(){
    
}

async function fetchByType() {
    

    let input = document.getElementById("typeFilter");
    let type = input.value;
    let response = await fetch("https://pokeapi.co/api/v2/type/"+type);
    let fetchedPokemons = await response.json();
    let items = await fetchedPokemons.pokemon;
    //let pokemons = [];
    console.log(items);

    items.forEach(poke => {
        //let p = new Pokemon(poke.pokemon.name, poke.pokemon.url);
        //pokemons.push(p);

        let li = document.createElement("li");
        li.innerHTML = poke.pokemon.name;
        htmlList.appendChild(li);
    });

    //console.log(pokemons);
}

async function fetchByGen() {
    let gen = document.getElementById("genFilter").innerText;
    let response = await fetch("https://pokeapi.co/api/v2/generation/"+gen);
    
    let fetchedPokemons = await response.json();
    let items = await fetchedPokemons.pokemon;
    //let pokemons = [];
    console.log(items);

    items.forEach(poke => {
        //let p = new Pokemon(poke.pokemon.name, poke.pokemon.url);
        //pokemons.push(p);

        let htmlList = document.getElementById("items");
        let li = document.createElement("li");
        li.innerHTML = p.name;
        htmlList.appendChild(li);
    });

    //console.log(pokemons);
}