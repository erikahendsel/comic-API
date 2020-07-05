const seeMoreBtn = document.createElement("button");
seeMoreBtn.textContent = `See more`;
let offset = 0;

async function getComics() {
  const api_url = `/comics/${offset}`;
  const response = await fetch(api_url);
  const comic_json = await response.json();
  const comic_results = comic_json.data.results;
  console.log(comic_json);
  comicList(comic_results);
  allComics.appendChild(seeMoreBtn);
  seeMoreBtn.addEventListener("click", seeMoreBtnClick);
}

function openComic(event) {
  console.log(event);
  window.open(`comic-id.html#${event}`, "_self");
  return event;
}
getComics();

function seeMoreBtnClick() {
  if (offset >= 500) {
    console.log("not allowed to load more than 500 comics per page");
    return;
  } else {
    offset += 100;
    console.log(offset, "type" + typeof offset);
    getComics();
    return offset;
  }
}
