/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM
const detailsContainer = document.querySelector(".details-container");
const title = document.querySelector("#js-h1");
// TODO: Get the query parameter from the URL
const queryString = document.location.search;

const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = `https://api.punkapi.com/v2/beers/${id}`;

async function getBeer() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const details = result[0];
    console.log(details);

    detailsContainer.innerHTML = `
    <img src="${details.image_url}" alt="image of ""/>
    <div class="details-description">${details.description}</div>
    <p>Alcohol percentage: ${details.abv}</p>
    <p>Best pairings: ${details.food_pairing}</p>`;
    title.innerHTML = details.name;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "error";
  }
}

getBeer();
// TODO: Get the id from the query parameter

// TODO: Create a new URL with the id @example: https://www.youtube.com/shorts/ps7EkRaRMzs

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the lsit to the DOM

// TODO: Create event listeners for the filters and the search

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an a single of objects from the API

/*
============================================
Helper functions
============================================
*/

/**
 * TODO: Create a function to create a DOM element.
 * @example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
