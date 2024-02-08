var size = 1.5;
var elem = document.getElementById("no");
// var messages = ["Are you sure?", "Really Sure?", "Are you positive"];

function resize() {
  var padding = window.getComputedStyle(elem, null).getPropertyValue("padding");

  var left = parseInt(padding.split("px")[0]);
  var right = parseInt(padding.split("px")[1]);
  var l1 = left * size;
  var l2 = right * size;

  elem.style.padding = l1 + "px " + l2 + "px";
  console.log(l1 + " " + l2);
}

// function message() {
//   var count = -1;
//   elem.innerHTML = messages[++count % messages.length];
// }

function noPress() {
  resize();
//   message();
}
