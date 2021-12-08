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

// if (p.innerHTML == "January") {
//   n.innerHTML = "Happy New Year!";
//   document.body.style.backgroundImage =
//     "url(https://i.pinimg.com/originals/56/73/6e/56736e99269e9e1fe8eed4b8b911644e.gif)";
//   document.body.style.backgroundSize = "cover";
//   document.body.style.backgroundRepeat = "no-repeat";
// }
// if (p.innerHTML == "February") {
//   document.body.style.backgroundColor = "red";
//   document.body.style.color = "white";
//   document.body.style.backgroundImage = "none";
// }
// if (p.innerHTML == "March") {
//   document.body.style.backgroundColor = "green";
//   document.body.style.color = "black";
//   document.body.style.backgroundImage = "none";
// }
// if (p.innerHTML == "April") {
//   document.body.style.backgroundColor = "green";
//   document.body.style.color = "black";
// }
// if (p.innerHTML == "May") {
//   document.body.style.backgroundColor = "yellow";
//   document.body.style.color = "black";
// }
// if (p.innerHTML == "June") {
//   document.body.style.backgroundColor = "orange";
//   document.body.style.color = "white";
// }
// if (p.innerHTML == "July") {
//   document.body.style.backgroundColor = "yellow";
//   document.body.style.color = "black";
// }
// if (p.innerHTML == "August") {
//   document.body.style.backgroundColor = "red";
//   document.body.style.color = "white";
// }
// if (p.innerHTML == "September") {
//   document.body.style.backgroundColor = "green";
//   document.body.style.color = "black";
// }
// if (p.innerHTML == "November") {
//   document.body.style.backgroundColor = "#8ac4ff";
//   document.body.style.color = "white";
// }
// if (p.innerHTML == "December") {
//   document.body.style.backgroundColor = "red";
//   document.body.style.color = "green";
// }
if (location.protocol != "https:") {
  location.href =
    "https:" + window.location.href.substring(window.location.protocol.length);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function closeModal() {
  modal.style.display = "none";
}