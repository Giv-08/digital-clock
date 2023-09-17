function realTime() {
  const today = new Date();
  // weekday array
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // month array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let d = today.getDate();
  let weekday = weekdays[today.getDay()]; // weekday's names
  let mth = months[today.getMonth()]; // month's names
  let yr = today.getFullYear();
  let h = today.getHours();

  /* convert hours to 12-hour format
  h = h % 12;*/
  /*display "0" as "12"
  h = h ? h : 12;*/

  let m = today.getMinutes();
  let s = today.getSeconds();

  // add am or pm suffix
  var session = h >= 12 ? "PM" : "AM";
  /* if (h == 0) {
    h = 12;
  } else {
    session = "PM";
  }*/
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  // print full date on browser
  document.getElementById("week-day").innerHTML = weekday;
  document.getElementById("date").innerHTML = d + " " + mth + " " + yr;
  document.getElementById("clock").innerHTML =
    h + " : " + m + " : " + s + " : " + session;
  setTimeout(realTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
