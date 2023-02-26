import { renderBeers } from "./renderBeers.js";

const filter = document.querySelector("#js-filters");

export const filterBeers = function (beers) {
  filter.addEventListener("change", function () {
    const selectedFilter = filter.value;
    let sortedBeers = [];

    if (selectedFilter === "high abv") {
      sortedBeers = beers.sort((a, b) => b.abv - a.abv);
    } else if (selectedFilter === "low abv") {
      sortedBeers = beers.sort((a, b) => a.abv - b.abv);
    } else if (selectedFilter === "a-z") {
      sortedBeers = beers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedFilter === "z-a") {
      sortedBeers = beers.sort((a, b) => b.name.localeCompare(a.name));
    }

    renderBeers(sortedBeers);
  });
};
