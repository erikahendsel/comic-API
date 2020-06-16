const allComics = document.querySelector(".comics");
async function getComics() {
  const api_url = `/comic`;
  const response = await fetch(api_url);
  const comic_json = await response.json();
  const comic_results = comic_json.data.results;
  showAllComics(comic_results);
}
getComics();

function showAllComics(data) {
  data.forEach((element) => {
    const apiComicTitle = element.title;
    const apiComicImages = element.images;
    const singleComicContainer = document.createElement("div");
    const webComicTitle = document.createElement("p");
    const webComicImage = document.createElement("img");
    singleComicContainer.classList.add("comic-container");
    webComicTitle.classList.add("comic-title");
    webComicTitle.textContent = apiComicTitle;
    singleComicContainer.appendChild(webComicTitle);
    apiComicImages.forEach((image) => {
      //   console.log(image.path + "." + image.extension);
      webComicImage.classList.add("comic-image");
      webComicImage.src = `${image.path}.${image.extension}`;
      singleComicContainer.appendChild(webComicImage);
    });
    allComics.appendChild(singleComicContainer);
  });
}
