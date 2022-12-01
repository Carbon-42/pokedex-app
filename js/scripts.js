//Array of Pokemon
let pokemonRepository = (function() {

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

    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
    };

})()

 //Array Loop Display
let exclamation=""

pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height > 1) {exclamation= " - Wow that's big!"}
    else exclamation= ""
    document.write(pokemon.name + " (height: " + pokemon.height + "m)" + exclamation + '<br>'); 
})
