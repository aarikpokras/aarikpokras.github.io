console.log("Welcome to SearchMe!");
var p = document.getElementById("m");
var x = document.getElementById("d");
var q = document.getElementById("y");
var n = document.getElementById("tww");
var k = new Date();
var months = [
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
  "December"
];
p.innerHTML = months[k.getMonth()];
x.innerHTML = k.getDate() + ", ";
q.innerHTML = k.getFullYear();
/*alert("Happy New Year!");*/

if (p.innerHTML == "January") {
  n.innerHTML = "Happy New Year!";
  document.body.style.backgroundImage =
    "url(https://i.pinimg.com/originals/56/73/6e/56736e99269e9e1fe8eed4b8b911644e.gif)";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}
if (p.innerHTML == "February") {
  document.body.style.backgroundColor = "red";
  document.body.style.color = "white";
  document.body.style.backgroundImage = "none";
}
if (p.innerHTML == "March") {
  document.body.style.backgroundColor = "green";
  document.body.style.color = "black";
  document.body.style.backgroundImage = "none";
}
if (location.protocol != "https:") {
  location.href =
    "https:" + window.location.href.substring(window.location.protocol.length);
}

