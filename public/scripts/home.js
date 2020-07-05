const seeMoreBtn = document.createElement("button");
const seeMoreBtnContainer = document.createElement("div");
seeMoreBtnContainer.classList.add("fetch-btn-container");
seeMoreBtnContainer.appendChild(seeMoreBtn);
seeMoreBtn.classList.add("btn", "fetch-more-btn");
seeMoreBtn.textContent = `See more`;
let offset = 0;

async function getComics() {
  const api_url = `/comics/${offset}`;
  const response = await fetch(api_url);
  const comic_json = await response.json();
  const comic_results = comic_json.data.results;
  console.log(comic_json);
  comicList(comic_results);
  allComics.appendChild(seeMoreBtnContainer);
  seeMoreBtn.addEventListener("click", seeMoreBtnClick);
}

function openComic(event) {
  console.log(event);
  window.open(`comic-id.html#${event}`, "_self");
  return event;
}
getComics();

function seeMoreBtnClick() {
  if (offset >= 100) {
    const maxFetchLimitReached = document.createElement("p");
    maxFetchLimitReached.classList.add("max-fetch-notice");
    maxFetchLimitReached.innerHTML = `Maximum amount of comics loaded. Please go to the search page to find your desired comic.<br> <a href='./search.html'>Go to search page</a>`;
    allComics.appendChild(maxFetchLimitReached);
    return;
  } else {
    offset += 100;
    console.log(offset, "type" + typeof offset);
    getComics();
    return offset;
  }
}
