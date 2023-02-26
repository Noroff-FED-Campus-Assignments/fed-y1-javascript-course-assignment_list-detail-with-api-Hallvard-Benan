const detailsContainer = document.querySelector(".details-container");
const title = document.querySelector("#js-h1");
const queryString = document.location.search;
const documentTitle = document.querySelector("title");

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
    <div class="details-description">${details.description}</div>
    <p>Alcohol percentage: ${details.abv}</p>
    <p>Best pairings: ${details.food_pairing.join(", ")}</p>
    <img src="${details.image_url}" alt="image of "${
      details.name
    }" class="card-image"/>
    `;
    title.innerHTML = details.name;
    documentTitle.textContent = `${details.name} | Brewster`;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "error";
  }
}

getBeer();
