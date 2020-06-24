const comicContainer = document.querySelector(".single-comic-container");
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
    const comicImage = document.createElement("img");
    const comicTitle = document.createElement("p");
    const comicCreators = document.createElement("p");
    const comicPrice = document.createElement("p");
    const comicPageCount = document.createElement("p");
    const comicOnSaleDate = document.createElement("p");
    const comicDetails = document.createElement("a");

    comicTitle.textContent = singleComicTitle;
    comicPageCount.textContent = `Page count: ${singleComicPageCount} pages`;

    singleComicImage.forEach((image) => {
      comicImage.classList.add("single-comic-image");
      comicImage.src = `${image.path}.${image.extension}`;
      comicContainer.appendChild(comicImage);
    });
    comicContainer.appendChild(comicTitle);

    singleComicCreators.forEach((item) => {
      comicCreators.textContent = `Creator: ${item.name}`;
      comicContainer.appendChild(comicCreators);
    });
    singleComicOnSaleDate.forEach((saleDate) => {
      if (saleDate.type === "onsaleDate") {
        const removeTimeFromDate = saleDate.date.split("T")[0];
        comicOnSaleDate.textContent = `Published: ${removeTimeFromDate}`;
        comicContainer.appendChild(comicOnSaleDate);
      } else {
        return;
      }
    });
    comicContainer.appendChild(comicPageCount);
    singleComicPrice.forEach((price) => {
      comicPrice.textContent = `Price: ${price.price}`;
      comicContainer.appendChild(comicPrice);
    });
    singleComicDetails.forEach((detail) => {
      comicDetails.setAttribute("href", detail.url);
      comicDetails.target = "_blank";
      comicDetails.innerHTML = `Click here for this comic summary`;
      comicContainer.appendChild(comicDetails);
    });
  });
}
