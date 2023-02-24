import { renderBeers } from "./renderBeers.js";
const searchBar = document.querySelector(".search-bar");
const strengthSelector = document.querySelector("#strength");

export function searchBeers(beers) {
  searchBar.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();
    const searcedBeers = beers.filter(function (beer) {
      if (beer.name.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderBeers(searcedBeers);
  };
}

export function filterForStrength(beers) {
  strengthSelector.addEventListener("change", function (event) {
    const filterValue = event.target.value;
    const filteredBeers = beers.filter(function (beer) {
      if (
        parseFloat(beer.abv) <= filterValue &&
        parseFloat(beer.abv) > filterValue - 6
      ) {
        return true;
      }
    });
    if (filterValue) {
      renderBeers(filteredBeers);
    }
  });
}
