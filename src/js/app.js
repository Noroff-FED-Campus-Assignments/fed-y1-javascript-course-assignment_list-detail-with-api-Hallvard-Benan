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
