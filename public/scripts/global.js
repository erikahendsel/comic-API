const allComics = document.querySelector(".comics");

function openComic(event) {
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
    webComicImage.classList.add("comic-image");

    if (apiComicImages.length === 0) {
      webComicImage.src = `assets/images/no-image.jpg`;
      singleComicContainer.appendChild(webComicImage);
    } else {
      apiComicImages.forEach((image) => {
        webComicImage.src = `${image.path}.${image.extension}`;
        singleComicContainer.appendChild(webComicImage);
      });
    }

    singleComicContainer.classList.add("comic-container", `id-${apiComicID}`);
    singleComicContainer.appendChild(singleComicTextContainer);
    webComicTitle.classList.add("comic-title");
    webComicTitle.textContent = apiComicTitle;
    singleComicTextContainer.appendChild(webComicTitle);

    apiComicPrices.forEach((price) => {
      webComicPrice.classList.add("comic-price");
      webComicPrice.textContent = `price: $${price.price}`;
      singleComicTextContainer.appendChild(webComicPrice);
    });

    allComics.appendChild(singleComicContainer);

    singleComicContainer.addEventListener("click", function () {
      openComic(apiComicID);
    });
  });
}

function addComicToLocalStorage(comic) {
  const favoriteComicBtn = document.querySelector(".favorite-btn");
  const favoriteComicBtnText = `<i class="fas fa-heart"></i> Favorited`;
  let favoritedComics;

  if (localStorage.getItem("favoritedComics") === null) {
    favoritedComics = [];
  } else {
    favoritedComics = JSON.parse(localStorage.getItem("favoritedComics"));
  }
  if (favoritedComics.includes(comic)) {
    //Remove comic
    favoriteComicBtn.classList.remove("active");
    favoriteComicBtn.innerHTML = `<i class="far fa-heart"></i> Favorite`;
    favoritedComics.splice(favoritedComics.indexOf(comic), 1);
    localStorage.setItem("favoritedComics", JSON.stringify(favoritedComics));
  } else {
    //Add comic
    favoritedComics.push(comic);
    favoriteComicBtn.classList.add("active");
    localStorage.setItem("favoritedComics", JSON.stringify(favoritedComics));
    favoriteComicBtn.innerHTML = `<i class="fas fa-heart"></i> Unfavorite`;
  }
}
