"use strict";

function fetchStarWars3() {  // sa permet de récupérer des données depuis l'api vers mon site web avec ma clée privé
    return fetch(
        'https://api.themoviedb.org/3/movie/1895?api_key="AJOUTER ICI SA CLEE"&language=fr-FR'   //AJOUTER sa clée de vérification
    )
    .then((response) => response.json())
}

async function displayStarWars3(){   //récupére les informations et les ajoute sur mon html avec du code et les données demander "data"
    const data = await fetchStarWars3()
    document.getElementById("starwars3").innerHTML = `<h1>${data.title}</h1> <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt=${data.title} /> `
}

displayStarWars3(); //affiche la fonction
