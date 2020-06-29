// const allComics = document.querySelector(".comics");

async function getComics() {
  const api_url = `/comics`;
  const response = await fetch(api_url);
  const comic_json = await response.json();
  const comic_results = comic_json.data.results;
  console.log(comic_json);
  comicList(comic_results);
}

function openComic(event) {
  console.log(event);
  window.open(`comic-id.html#${event}`, "_self");
  return event;
}
getComics();
