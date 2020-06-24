const comicContainer = document.querySelector(".single-comic-container");
const idFromUrl = window.location.hash.substring(1);

async function getSingleComic() {
  const api_url_withID = `/id/${idFromUrl}`;
  const api_response = await fetch(api_url_withID);
  const single_comic_json = await api_response.json();
  console.log(single_comic_json);
}
getSingleComic();
