//Helpful links that helped me to get items from localStorage
// https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
function getComicFromLocalStorage() {
  const localStorageComics = JSON.parse(
    localStorage.getItem("favoritedComics")
  );
  if (localStorageComics === null) {
    const noComicsAddedText = document.createElement("p");
    noComicsAddedText.textContent = "No comics have been favorited yet.";
    allComics.appendChild(noComicsAddedText);
  } else {
    localStorageComics.forEach(async (comic) => {
      const api_url_withID = `/favorited-comics/${comic}`;
      const api_response = await fetch(api_url_withID);
      const comic_json = await api_response.json();
      comicList(comic_json.data.results);
    });
  }
}
getComicFromLocalStorage();
