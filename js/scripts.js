//Array of Pokemon
let pokemonRepository = (function() {
    let pokemonList= [];

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let modalContainer = document.querySelector('#modal-container');
    
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
        $(listItem).addClass('list-group-item');
        $(button).addClass('btn btn-primary');
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        });
    }        

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            showModal(pokemon.name, 'Height: ' + pokemon.height, pokemon.imageUrl);
            // console.log(pokemon);
        })
    }

    function showModal(name, text, img) {

      //select and clear div
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.innerText = '';

      //create modal div and add class
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modalContainer.appendChild(modal);

      //create close button
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close'
        closeButtonElement.addEventListener('click', hideModal);

      //create pokemon name
        let nameElement = document.createElement('h2');
        nameElement.classList.add('poke-name');
        nameElement.innerText = name;

      //create pokemon text
        let textElement = document.createElement('p');
        textElement.classList.add('poke-details');
        textElement.innerText = text;

      //create pokemon image
        let imgElement = document.createElement('img');
        imgElement.classList.add('poke-img');
        imgElement.setAttribute("src", img);

      //append above elements to modal div
        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(textElement);
        modal.appendChild(imgElement);

      //make modal visible on 'click'
        modalContainer.classList.add('is-visible');

      //modal 'escape' key close function
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();  
          }
        }); 

      //modal 'click' outside modal close function
        modalContainer.addEventListener('click', (e) => {
          let target = e.target;
          if (target === modalContainer) {
            hideModal();
          }
        });

    }

    function hideModal() {
        modalContainer.classList.remove('is-visible');
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
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
        }).catch(function (e) {
          console.error(e);
        });
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


