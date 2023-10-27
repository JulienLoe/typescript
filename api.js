let tabPokemon = [];

const items = document.querySelector(".items")
const searchUser = document.querySelector("#search")

let pokemons;
let newPokemonTab = "ditto"


async function afficherAll(){
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const pokemon = await reponse.json();
    pokemons = pokemon
    tabPokemon.push(pokemon);
    console.log(pokemon)
}

async function afficherPokemon() {
    
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemonTab}`);
    const pokemon = await reponse.json();
    pokemons = pokemon
    tabPokemon.push(pokemon);
    console.log(pokemons.types[0].type.name)
    
    document.getElementById('img').src = pokemons.sprites.front_default;
    document.getElementById('h2').innerText = pokemons.name
    document.getElementById('number').innerText = pokemons.order
    document.getElementById('type').innerText = pokemons.types[0].type.name
    if(pokemons.types.length == 2){
        document.getElementById('type2').innerText = pokemons.types[1].type.name
    }
    document.getElementById('weight').innerText = pokemons.weight
    document.getElementById('height').innerText = pokemons.height
    document.getElementById('abilities').innerText = pokemons.abilities[0].ability.name
    console.log(pokemons.abilities.length)
    if(pokemons.abilities.length == 2){
        document.getElementById('abilities2').innerText = pokemons.abilities[1].ability.name
    }
    console.log(pokemons.abilities[1].ability.name)
    console.log(searchUser.target)


    
  }

  

  document.addEventListener("DOMContentLoaded", afficherAll)
  searchUser.addEventListener("input", (e) =>{
    let pokemontab = []
    pokemontab = tabPokemon[0].results
        console.log(pokemontab)
        const element = e.target.value.toLowerCase()
        let newPokemon = pokemontab.filter(pokemon =>
            pokemon.name.toLowerCase().includes(element)
        
        )
        console.log(newPokemon)
        newPokemonTab = newPokemon[0].name
        console.log(newPokemonTab[0].name)
        afficherPokemon()
        
        
    
        
  })

  searchUser.addEventListener("input", (e) =>{
    let pokemontab = []
    pokemontab = tabPokemon[0].results
        console.log(pokemontab)
        const element = e.target.value.toLowerCase()
        let newPokemon = pokemontab.filter(pokemon =>
            pokemon.name.toLowerCase().includes(element)
        
        )
        console.log(newPokemon)
        newPokemonTab = newPokemon[0].name
        console.log(newPokemonTab[0].name)
        afficherPokemon()
        
        
    
        
  })
