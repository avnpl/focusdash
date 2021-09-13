function endOfWeek(date)
  {
     
    var lastday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(lastday));
 
  }
  var eventDate = new Date();
  var weekEnd = endOfWeek(eventDate);

function countdown(){
var today = new Date();
function pad(number, length) {
   
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;

}




  var currentTime = today.getTime();
  var weekEndTime = weekEnd.getTime();
  
  var remTime = weekEndTime - currentTime;

  var s = Math.floor(remTime/1000);
  var m = Math.floor(s/60);
  var h = Math.floor(m/60);
  var d = pad(Math.floor(h/24),2);
  
  h = pad(h%24,2);
  m = pad(m%60,2);
  s = pad(s%60,2);

  
document.getElementById("days").innerText = d;
document.getElementById("hours").innerText = h;
document.getElementById("minutes").innerText = m;
document.getElementById("seconds").innerText = s;

//console.log(s);
setTimeout(countdown,1000);

}

countdown();

