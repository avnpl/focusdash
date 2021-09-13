function endOfWeek(date) {
  var lastday = date.getDate() - (date.getDay() - 1) + 6;
  return new Date(date.setDate(lastday));
}
var eventDate = new Date();
eventDate.setHours(23);
eventDate.setMinutes(59);
eventDate.setSeconds(59);
eventDate.setMilliseconds(999);

var weekEnd = endOfWeek(eventDate);

function countdown() {
  var today = new Date();
  function pad(number, length) {
    var str = "" + number;
    while (str.length < length) {
      str = "0" + str;
    }

    return str;
  }

  var currentTime = today.getTime();
  var weekEndTime = weekEnd.getTime();

  var remTime = weekEndTime - currentTime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = pad(Math.floor(h / 24), 2);

  h = pad(h % 24, 2);
  m = pad(m % 60, 2);
  s = pad(s % 60, 2);

  var bgToday = new Date();
  var bgDate = bgToday.getDate();
  var bgMonth = bgToday.getMonth();

  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("quote").innerHTML =
        '"' +
        data[bgDate * bgMonth].text +
        '"' +
        " - " +
        data[bgDate * bgMonth].author;
    });

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h;
  document.getElementById("minutes").innerHTML = m;
  document.getElementById("seconds").innerHTML = s;

  //console.log(d + ' days ' + h + ' hours ' + m + ' minutes ' + s + ' seconds ' );

  setTimeout(countdown, 1000);
}

countdown();
