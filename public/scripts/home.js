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

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene();

// var scene = new ScrollMagic.Scene({
//   triggerElement: "#trigger-div", // starting scene, when reaching this element
//   duration: 400, // pin the element for a total of 400px
//   triggerHook: "onEnter",
// }).setPin("#trigger-div"); // the element we want to pin

// // Add Scene to ScrollMagic Controller
// controller.addScene(scene);

// scene.on("add", function (event) {
//   const triggerP = document.querySelector(".trigger-div");
//   triggerP.textContent = "You entered the new scene!!!!";
//   console.log("added");
// });
