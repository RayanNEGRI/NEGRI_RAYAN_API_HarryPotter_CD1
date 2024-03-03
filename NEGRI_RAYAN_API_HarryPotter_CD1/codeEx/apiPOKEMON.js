"use strict";

function fetchPokemon(pokemon) { // sa permet de récupérer des données depuis l'api vers mon site web 
    return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
    .then((response) => response.json())
}
    
async function displayPokemon(pokemon){   //récupére les informations et les ajoute sur mon html avec du code et les données demander "data"
    const data = await fetchPokemon(pokemon)
    document.getElementById("pokemon").innerHTML = `<h1>${data.name}</h1> <img src="${data.sprites.front_default}" alt="${data.name}"/> `;
}

displayPokemon('charizard'); //affiche la fonction avec en paramétre le personnage qu'ont veux afficher