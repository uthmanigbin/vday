var size = 1.2;
var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var messages = [
  "Are you sure?",
  "Really Sure?",
  "Are you positive??",
  "Honey please",
  "Just think about it",
  "if you say no, I'll be sad",
  "I'll be very sad",
  "I'll be very ver very sad",
  "You're breaking my heart :(",
  "ok fine",
  "Sike",
];
var messageIndex = 0;

function resize() {
  var font = window
    .getComputedStyle(yesBtn, null)
    .getPropertyValue("font-size");
  var padding = window
    .getComputedStyle(yesBtn, null)
    .getPropertyValue("padding");

  var fontSize = parseInt(font.split("px"));
  var left = parseInt(padding.split("px")[0]);
  var right = parseInt(padding.split("px")[1]);

  var newFont = fontSize * size;
  var l1 = left * size;
  var l2 = right * size;

  if (messageIndex < messages.length) {
    yesBtn.style.fontSize = newFont + "px";
    yesBtn.style.padding = l1 + "px " + l2 + "px";
    noBtn.style.fontSize = "16px";
    console.log(l1 + " " + l2);
  } else {
    noBtn.style.display = "none";
    yesBtn.style.width = window.innerWidth + "px";
    yesBtn.style.height = "100vh";
    yesBtn.style.position = "fixed"; // Set position to fixed
    yesBtn.style.top = "0"; // Align to the top of the viewport
    yesBtn.style.left = "0"; // Align to the left of the viewport
    yesBtn.style.zIndex = "9999"; // Set a high z-index value
  }
}

function message() {
  if (messageIndex < messages.length) {
    var currentMessage = messages[messageIndex];
    noBtn.innerHTML = currentMessage;
    messageIndex++;
  } else {
    noBtn.innerHTML = messages[0];
  }
}

function noPress() {
  resize();
  message();
}
