// const searchResult = document.querySelector(".comics");
const submitBtn = document.querySelector(".submit-btn");
const searchContainer = document.querySelector(".search-container");
const searchedValue = document.querySelector(".input-message");

submitBtn.addEventListener("click", getSingleComic);

async function getSingleComic(event) {
  event.preventDefault();
  const search = searchInputValue();
  const api_search = `/search/${search}`;
  const api_searchResponse = await fetch(api_search);
  const comic_json = await api_searchResponse.json();
  const comic_results = comic_json.data.results;
  const comicData = comic_json.data;
  comicList(comic_results);
  totalResults(comic_json.data.total);
}

function searchInputValue(event) {
  //we can not have the value in global scope. We want to fetch the value when we run this function. If it is on global, the script will run and the value is empty: https://www.freecodecamp.org/forum/t/declaring-global-variable-in-js-outside-of-function-not-working/236350
  clearResultsHTML();
  const inputValue = document.querySelector("#search-comic").value;
  if (inputValue === "") {
    searchedValue.textContent = `Searchbox is empty`;
    return false;
  } else {
    searchedValue.innerHTML = `Searched value: <b>${inputValue}</b>`;
    return inputValue;
  }
}
function clearResultsHTML() {
  allComics.innerHTML = "";
}
function totalResults(data) {
  const totalFound = document.querySelector(".total-found");
  totalFound.innerHTML = `Found <b>${data}</b> related results`;
}
