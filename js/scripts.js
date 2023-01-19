//Array of Pokemon
let pokemonRepository = (function() {
    let pokemonList= [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

	let inputField = document.querySelector('.search');

	let printedList = document.querySelector('.pokemon-list');
    
	// grabs data from API to return outside IIFE
    function getAll() {
        return pokemonList;
    }

	// adds pokemon to list
    function add(pokemon) {
        pokemonList.push(pokemon);
    }

	//displays pokemon list buttons
    function addListItem(pokemon) {
        let someList = $('.pokemon-list');
        let listItem = $('<li class="col"></li>');
        let button = $('<button id="poke-button" data-toggle="modal" data-target="#modal-container">' + pokemon.name + '</button>');
        listItem.append(button);
        someList.append(listItem);

        button.on('click', function () {
            showDetails(pokemon);
        });
    }
     
    // create search box functionality
    function filterPokemon(query) {
    	return pokemonList.filter(function (pokemon) {
     	 // toLowerCase() method to make input not case-sensitive
		let pokemonLowerCase = pokemon.name.toLowerCase();
		let queryLowerCase = query.toLowerCase();
		return pokemonLowerCase.startsWith(queryLowerCase);
		});
	}

	inputField.addEventListener('input', function () {
		let query = inputField.value;
		let filteredList = filterPokemon(query);
		removeList();
		if (filteredList.length === 0) {
		showErrorMessage(
			'Sorry. There are no Pokémon matching your search criteria.'
		);
		} else {
		filteredList.forEach(addListItem);
		}
	});

	// clears button list when searching
	function removeList() {
		printedList.innerHTML = '';
	  }

	//shows error message for empty search list  
	function showErrorMessage(message) {
		let errorMessage = document.createElement('p');
		errorMessage.classList.add('error-message');
		errorMessage.classList.add('col');
		errorMessage.innerText = message;
	
		printedList.appendChild(errorMessage);
	}

	//loading pokemon details from API
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

	//loading individiual details from loadList function
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

	//displays modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        });
    }

	//creates modal
    function showModal(pokemon) {

        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');

        modalBody.empty();
        modalTitle.empty();

        let nameElement = $('<h2>' + pokemon.name + '</h2>');
        let imageElementFront = $('<img class="img-modal" src="' + pokemon.imageFrontUrl + '" />');
        let imageElementBack = $('<img class="img-modal" src="' + pokemon.imageBackUrl + '" />');
        let heightElement = $('<p>' + "Height : " + pokemon.height / 10 + "m" + '</p>');
        let weightElement = $('<p>' + "Weight : " + pokemon.weight / 10 + "kg" + '</p>');
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


