//Array of Pokemon
let pokemonList= [
    {
        name: 'Charmander', 
        height: 0.6, 
        types: ['scale', 'fire']
    },

    {
        name: 'Pikachu', 
        height: 0.4, 
        types: ['electric', 'yellow']
    },

    {
        name: 'Seel', 
        height: 1.1, 
        types: ['water', 'wet']
    }
]

 //Array Loop Display
let exclamation=""

pokemonList.forEach(function(pokemon) {
    if (pokemon.height > 1) {exclamation= " - Wow that's big!"}
    else exclamation= ""
    document.write(pokemon.name + " (height: " + pokemon.height + "m)" + exclamation + '<br>'); 
})
