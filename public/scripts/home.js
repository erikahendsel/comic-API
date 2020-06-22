const allComics = document.querySelector(".comics");
const comicList = document.querySelector(".comic-container");

async function getComics() {
  const api_url = `/comics`;
  const response = await fetch(api_url);
  const comic_json = await response.json();
  const comic_results = comic_json.data.results;
  showAllComics(comic_results);
}

function openComic(event) {
  console.log(event.target);
}
getComics();

// async function main() {
//   await getComics();
//   await openComic();
// }

// main();

function showAllComics(data) {
  data.forEach((element) => {
    const apiComicTitle = element.title;
    const apiComicImages = element.images;
    const singleComicContainer = document.createElement("div");
    const webComicTitle = document.createElement("p");
    const webComicImage = document.createElement("img");
    apiComicImages.forEach((image) => {
      webComicImage.classList.add("comic-image");
      webComicImage.src = `${image.path}.${image.extension}`;
      singleComicContainer.appendChild(webComicImage);
    });
    singleComicContainer.classList.add("comic-container");
    webComicTitle.classList.add("comic-title");
    webComicTitle.textContent = apiComicTitle;
    singleComicContainer.appendChild(webComicTitle);

    allComics.appendChild(singleComicContainer);

    singleComicContainer.addEventListener("click", openComic);
  });
}
