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

    function addListItem(pokemon) {
        let someList= document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');
        let button= document.createElement('button');
        button.innerText= pokemon.name;
        button.classList.add('poke-button');
        listItem.appendChild(button);
        someList.appendChild(listItem);
        button.addEventListener('click', function (event) {
            showDetails(pokemon)
        });
    }        

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
    };

})()

 //Array Loop Display
pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
    // pokemonRepository.showDetails(pokemon);
})


// if (pokemon.height > 1) {exclamation= " - Wow that's big!"}
// else exclamation= ""
// document.write(pokemon.name + " (height: " + pokemon.height + "m)" + exclamation + '<br>'); 
