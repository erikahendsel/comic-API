const allComics = document.querySelector(".comics");

function openComic(event) {
  console.log(event);
  window.open(`comic-id.html#${event}`, "_self");
  return event;
}

function comicList(data) {
  data.forEach((element) => {
    const apiComicTitle = element.title;
    const apiComicImages = element.images;
    const apiComicPrices = element.prices;
    const apiComicID = element.id;
    const singleComicContainer = document.createElement("div");
    const singleComicTextContainer = document.createElement("div");
    const webComicTitle = document.createElement("p");
    const webComicImage = document.createElement("img");
    const webComicPrice = document.createElement("p");
    singleComicTextContainer.classList.add("comic-text-container");

    apiComicImages.forEach((image) => {
      webComicImage.classList.add("comic-image");
      webComicImage.src = `${image.path}.${image.extension}`;
      singleComicContainer.appendChild(webComicImage);
    });

    singleComicContainer.classList.add("comic-container", `id-${apiComicID}`);
    singleComicContainer.appendChild(singleComicTextContainer);
    webComicTitle.classList.add("comic-title");
    webComicTitle.textContent = apiComicTitle;
    singleComicTextContainer.appendChild(webComicTitle);

    apiComicPrices.forEach((price) => {
      webComicPrice.classList.add("comic-price");
      webComicPrice.textContent = `price: ${price.price}`;
      singleComicTextContainer.appendChild(webComicPrice);
    });

    allComics.appendChild(singleComicContainer);

    singleComicContainer.addEventListener("click", function () {
      openComic(apiComicID);
    });
  });
}