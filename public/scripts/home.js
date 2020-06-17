const allComics = document.querySelector(".latest-comics");
async function latestComics() {
  const latest_url = `/latest-comics`;
  const latestResponse = await fetch(latest_url);
  const latestComic_json = await latestResponse.json();
  const comic_results = latestComic_json.data.results;
  console.log(latestComic_json);
  showLatestComics(comic_results);
}
latestComics();

function showLatestComics(data) {
  data.forEach((element) => {
    // const apiComicTitle = element.title;
    const apiComicImages = element.images;
    const singleComicContainer = document.createElement("div");
    const webComicTitle = document.createElement("p");
    const webComicImage = document.createElement("img");
    singleComicContainer.classList.add("comic-container");
    // webComicTitle.classList.add("comic-title");
    // webComicTitle.textContent = apiComicTitle;
    // singleComicContainer.appendChild(webComicTitle);
    apiComicImages.forEach((image) => {
      //   console.log(image.path + "." + image.extension);
      webComicImage.classList.add("comic-image");
      webComicImage.src = `${image.path}.${image.extension}`;
      singleComicContainer.appendChild(webComicImage);
    });
    allComics.appendChild(singleComicContainer);
  });
}
