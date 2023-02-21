/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM
const url = `https://api.punkapi.com/v2/beers?per_page=80`;
const resultsContainer = document.querySelector("#js-list-container");
const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");

async function getBeers() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    resultsContainer.innerHTML = "";

    results.forEach(function (beer) {
      resultsContainer.innerHTML += `
    <a href="details.html?id=${beer.id}">
    <div class="card">
      <h3>${beer.name}</h3>
      <div class="card-image">
        <img src="${beer.image_url}" alt="image of ${beer.name}" class="card-image" />
        </div>
        <p>"${beer.tagline}"</p>
  </div>
    </a>
    `;
      resultsContainer.classList.add("results-list");
    });
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}
getBeers();

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */
/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
