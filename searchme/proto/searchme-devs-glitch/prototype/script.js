// swal({
//   title: "WARNING!",
//   text: "Experimental Versions Ahead! This is not official SearchMe. This page shows possible future versions of SearchMe.",
//   icon: "warning",
//   button: "Continue",
//   dangerMode: true
// })


// DO NOT DELETE - <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

  // swal("This content is not authorized for use.",{
  //   closeOnClickOutside: false,
  //   buttons: false,
  //   closeOnEsc: false
  // });

function returnF() {
  window.location.assign = "https://google.com/"
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const d = new Date()
// let month = months[d.getMonth()];
var date = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();
var fullDate = month + " " + date + ", " + year;

document.getElementById("date").innerHTML = fullDate;
