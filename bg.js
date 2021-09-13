function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var imgToday = new Date();
var imgDate = imgToday.getDate();

function changeBg() {
  var apiUrl = `https://pixabay.com/api/?key=18503274-e0fb94028e76bf5c37d20f2b3&q=landscape&orientation=horizontal&min_width=1920&min_height=1080&page=${randomNumber(
    1,
    26
  )}`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var imgSrc = data.hits[randomNumber(1, 10)];

      //console.log(imgSrc);
      document.body.style.background =
        "url(" +
        ` ${imgSrc.largeImageURL} ` +
        ")" +
        " no-repeat" +
        " center" +
        " center" +
        " fixed";
      document.body.style.backgroundSize = "cover";
    });
}

changeBg();
