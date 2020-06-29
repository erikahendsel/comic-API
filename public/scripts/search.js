const searchResult = document.querySelector(".search-result");
const submitBtn = document.querySelector(".submit-btn");

submitBtn.addEventListener("click", getSingleComic);

async function getSingleComic(event) {
  event.preventDefault();
  const search = "spider";
  const api_search = `/search/${search}`;
  const api_searchResponse = await fetch(api_search);
  const api_searched = await api_searchResponse.json();
  console.log(api_searched);
  // singleComicDetails(single_comic_json.data.results);
}

function test(event) {
  event.preventDefault();
  const inputValue = document.querySelector("#search-comic").value;
  searchResult.textContent = inputValue;
}
