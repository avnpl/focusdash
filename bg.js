const body = document.querySelector("body");
const date = new Date();
const day = date.getDate();

// body.style.backgroundImage = `img/${day}.jpg`;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `img/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function init() {
  paintImage(day);
}

init();
