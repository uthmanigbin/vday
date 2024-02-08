var size = 1.5;
var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
// var messages = ["Are you sure?", "Really Sure?", "Are you positive"];

function resize() {
  var padding = window
    .getComputedStyle(noBtn, null)
    .getPropertyValue("padding");

  var left = parseInt(padding.split("px")[0]);
  var right = parseInt(padding.split("px")[1]);
  var l1 = left * size;
  var l2 = right * size;

  if (l1 < 100) {
    noBtn.style.padding = l1 + "px " + l2 + "px";
    console.log(l1 + " " + l2);
  } else {
    noBtn.style.display = "none";
    yesBtn.style.width = "1000vh";
    yesBtn.style.height = "1000vh";
  }
}

// function message() {
//   var count = -1;
//   elem.innerHTML = messages[++count % messages.length];

// }

function noPress() {
  resize();
  // message();
}
