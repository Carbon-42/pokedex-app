//Array of Pokemon
let pokemonRepository = (function() {
    let pokemonList= [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    function getAll() {
        return pokemonList;
    }

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function addListItem(pokemon) {
        let someList = $('.pokemon-list');
        let listItem = $('<li></li>');
        let button = $('<button id="poke-button" data-toggle="modal" data-target="#modal-container">' + pokemon.name + '</button>');
        listItem.append(button);
        someList.append(listItem);

        button.on('click', function () {
            showDetails(pokemon);
        });
    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        });
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageFrontUrl = details.sprites.front_default;
          item.imageBackUrl = details.sprites.back_default;
          item.weight = details.weight;
          item.height = details.height;
          item.types = details.types.map((type) => type.type.name);
          item.abilities = details.abilities.map((abilities) => abilities.ability.name);
        }).catch(function (e) {
          console.error(e);
        });
    }     

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

    function showModal(pokemon) {

        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalBody.empty();
        modalTitle.empty();

        let nameElement = $('<h2>' + pokemon.name + '</h2>');
        let imageElementFront = $('<img class="img-modal" src="' + pokemon.imageFrontUrl + '" />');
        let imageElementBack = $('<img class="img-modal" src="' + pokemon.imageBackUrl + '" />');
        let heightElement = $('<p>' + "Height : " + pokemon.height + '</p>');
        let weightElement = $('<p>' + "Weight : " + pokemon.weight + '</p>');
        let typesElement = $('<p>' + "Types : " + pokemon.types + '</p>');
        let abilitiesElement = $('<p>' + "Abilities: " + pokemon.abilities + '</p>');
       

        modalTitle.append(nameElement);
        modalBody.append(imageElementFront);
        modalBody.append(imageElementBack);
        modalBody.append(heightElement);
        modalBody.append(weightElement);
        modalBody.append(typesElement);
        modalBody.append(abilitiesElement);
    }

    return {
        getAll: getAll,
        add: add,
        loadList: loadList,
        loadDetails: loadDetails,
        addListItem: addListItem,
    };

})()

 //Array Loop Display
pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
})})


