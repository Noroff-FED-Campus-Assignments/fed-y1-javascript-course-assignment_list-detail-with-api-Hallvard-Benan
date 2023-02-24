const queryString = document.location.search;
const params = new URLSearchParams(queryString);
export const pageNumber = params.get("page");
let nextNumber = parseInt(pageNumber) + 1;
let previousNumber = parseInt(pageNumber) - 1;

export function renderBeers(beersToRender) {
  const resultsContainer = document.querySelector("#js-list-container");
  const pageButtonsContainer = document.querySelector(
    "#js-pagebuttons-container"
  );
  resultsContainer.innerHTML = "";
  pageButtonsContainer.innerHTML = "";

  beersToRender.forEach(function (beer) {
    if (!beer.image_url) {
      beer.image_url =
        "https://purepng.com/public/uploads/large/purepng.com-glass-of-beerbeeralcoholdrinkgerman-drinkglas-of-beer-231519339182ciwth.png";
    }
    resultsContainer.innerHTML += `
    <a href="details.html?id=${beer.id}">
    <div class="card">
      <div class="card-image-container">
      <img src="${beer.image_url}" alt="image of ${beer.name}" class="card-image" />
      </div>
      <div>
      <h3>${beer.name}</h3>
      </div>
      <div class="card-info">
        <div class="card-numbers">
          <p>Abv%: ${beer.abv}</p>
          <p>Ph: ${beer.ph}</p>
        </div>
        <p>"${beer.tagline}"</p>
        </div>
    </div>
    </a>
    `;
    // resultsContainer.classList.add("results-list");
  });

  let previousNumberHtml = `<a href="index.html?page=${previousNumber}" class="pagebuttons">< Previous page</a></div>`;
  let nextNumberHtml = `
      <a href="index.html?page=${nextNumber}" class="pagebuttons">Next page ></a>
    `;
  if (pageNumber == 1) {
    previousNumberHtml = "";
  }
  if (pageNumber == 5) {
    nextNumberHtml = "";
  }
  pageButtonsContainer.innerHTML += `
  ${previousNumberHtml}
  <h4>Page: ${pageNumber}</h4>
  ${nextNumberHtml}
  `;
}
