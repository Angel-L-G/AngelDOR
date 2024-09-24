import Pokemon from './Pokemon.js';

var pokemons = [];
const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#pokedex').style.visibility = 'visible';
    startPokedex();
});

const startPokedex = async () => {
    for(var i = 722; i <= 809; i++) {
        await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                const data = result;
                console.log(data);
                const pokemon = new Pokemon (data);
                pushPokemon(pokemon);
                //console.log(pokemon);
            });
    }
    await showPokedex();
};

function pushPokemon(pokemon) {
    pokemons.push(pokemon);
}

const showPokedex = async () => {
    const pokedex = document.getElementById("pokedex");
    
    for(var i = 0; i < pokemons.length; i++) {
        var aux =  0;
        while (aux != pokemons[i].pkm_type.length) {
            if (aux == 0)
                var tipo1 = pokemons[i].pkm_type[aux].type.name;                       
            if (aux == 1)   
                var tipo2 = pokemons[i].pkm_type[aux].type.name;
            else 
                tipo2 = "";          
            aux++; 
        }
        pokedex.innerHTML +=    
            `<div class="card">
                <img src="${pokemons[i].pkm_back}">
                <img class="front" src="${pokemons[i].pkm_front}"><br>
                ${pokemons[i].id}. ${pokemons[i].name}<br>
                <div class="types">
                    ${tipo1} ${tipo2}
                </div>
                <div class="dataContainer">
                    <div class="height">
                        Height: ${pokemons[i].pkm_height/10}
                    </div>
                    <div class="weight">
                        Weight: ${pokemons[i].pkm_weight/10}
                    </div>
                </div>
            </div>`
    }
}
