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

import { renderBeers } from "./functions/renderBeers.js";
import { pageNumber } from "./functions/renderBeers.js";
import { filterBeers } from "./functions/filters.js";

const searchBar = document.querySelector(".search-bar");

searchBar.addEventListener("keyup", () => getBeers(searchBar.value));

const url = `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=80`;
const resultsContainer = document.querySelector("#js-list-container");

async function getBeers(searchUrl = "") {
  let fetchUrl;
  if (!searchUrl) {
    fetchUrl = url;
  } else fetchUrl = `https://api.punkapi.com/v2/beers?beer_name=${searchUrl}`;
  try {
    const response = await fetch(fetchUrl);
    const beers = await response.json();
    renderBeers(beers);

    filterBeers(beers);
  } catch (error) {
    resultsContainer.innerHTML = `<h2>Sorry, something went wrong bip bop🤖</h2>
                                  <div>${error}</div>`;
  }
}

getBeers();

// filter.addEventListener("change", function () {
//   const selectedFilter = filter.value;
//   let sortedBeers = [];

//   if (selectedFilter === "abv") {
//     sortedBeers = beers.sort((a, b) => b.abv - a.abv);
//   } else if (selectedFilter === "a-z") {
//     sortedBeers = beers.sort((a, b) => a.name.localeCompare(b.name));
//   } else if (selectedFilter === "z-a") {
//     sortedBeers = beers.sort((a, b) => b.name.localeCompare(a.name));
//   }

//   renderBeers(sortedBeers);
// });
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
