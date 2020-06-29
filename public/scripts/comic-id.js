const comicMainContainer = document.querySelector(".single-comic-container");
const idFromUrl = window.location.hash.substring(1);

async function getSingleComic() {
  const api_url_withID = `/id/${idFromUrl}`;
  const api_response = await fetch(api_url_withID);
  const single_comic_json = await api_response.json();
  singleComicDetails(single_comic_json.data.results);
}
getSingleComic();

function singleComicDetails(data) {
  data.forEach((comic) => {
    const singleComicImage = comic.images;
    const singleComicTitle = comic.title;
    const singleComicCreators = comic.creators.items;
    const singleComicOnSaleDate = comic.dates;
    const singleComicPrice = comic.prices;
    const singleComicDetails = comic.urls;
    const singleComicPageCount = comic.pageCount;
    const comicSubContainer = document.createElement("div");
    const comicTextContainer = document.createElement("div");
    const comicHeadingContainer = document.createElement("div");
    const comicImageContainer = document.createElement("div");
    const comicImage = document.createElement("img");
    const comicTitle = document.createElement("p");
    const comicCreators = document.createElement("p");
    const comicPrice = document.createElement("p");
    const comicPageCount = document.createElement("p");
    const comicOnSaleDate = document.createElement("p");
    const comicDetails = document.createElement("a");
    comicTextContainer.classList.add("comic-text-container");
    comicImage.classList.add("single-comic-image");

    comicTitle.classList.add("comic-title");
    comicTitle.textContent = singleComicTitle;
    comicHeadingContainer.appendChild(comicTitle);
    comicMainContainer.appendChild(comicHeadingContainer);
    comicMainContainer.appendChild(comicSubContainer);
    comicSubContainer.appendChild(comicImageContainer);
    comicSubContainer.classList.add("comic-sub-container");
    comicImageContainer.classList.add("comic-image-container");
    comicPrice.classList.add("comic-price");

    if (singleComicImage.length === 0) {
      comicImage.src = `assets/images/no-image.jpg`;
      comicImageContainer.appendChild(comicImage);
    } else {
      singleComicImage.forEach((image) => {
        comicImage.src = `${image.path}.${image.extension}`;
        comicImageContainer.appendChild(comicImage);
      });
    }

    comicSubContainer.appendChild(comicTextContainer);

    singleComicCreators.forEach((item) => {
      comicCreators.textContent = `Creator: ${item.name}`;
      comicHeadingContainer.appendChild(comicCreators);
    });
    singleComicPrice.forEach((price) => {
      comicPrice.textContent = `$${price.price}`;
      comicTextContainer.appendChild(comicPrice);
    });

    comicTextContainer.appendChild(comicPageCount);
    comicPageCount.textContent = `Page count: ${singleComicPageCount} pages`;

    singleComicOnSaleDate.forEach((saleDate) => {
      if (saleDate.type === "onsaleDate") {
        const removeTimeFromDate = saleDate.date.split("T")[0];
        comicOnSaleDate.textContent = `Published: ${removeTimeFromDate}`;
        comicTextContainer.appendChild(comicOnSaleDate);
      } else {
        return;
      }
    });
    singleComicDetails.forEach((detail) => {
      comicDetails.setAttribute("href", detail.url);
      comicDetails.target = "_blank";
      comicDetails.innerHTML = `Click here for this comic summary`;
      comicTextContainer.appendChild(comicDetails);
    });
  });
}
