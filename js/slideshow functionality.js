let i = 0;
let images = [];
const time = 2500;

//image list
const img = document.querySelector("body > header > section > section img");
const slideshow = document.querySelector("body > header > section section");

images.push("./Images/slideshow/kids_main.jpg");
images.push("./Images/slideshow/forse.jpg");
images.push("./Images/slideshow/horse2.jpg");

function changeImg() {
  img.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
