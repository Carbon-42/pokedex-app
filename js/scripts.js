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
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1) {exclamation= " - Wow that's big!"}
    else exclamation= ""
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + "m)" + exclamation); 
}
