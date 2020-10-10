var red = document.querySelector("#Red");
var redv = document.querySelector("#redv");
var green = document.querySelector("#Green");
var greenv = document.querySelector("#greenv");
var blue = document.querySelector("#Blue");
var bluev = document.querySelector("#bluev");
var square = document.querySelector(".square");

function changevalue() {
  redv.value = red.value;
  greenv.value = green.value;
  bluev.value = blue.value;

  square.style.backgroundColor = "rgb(" + red.value + "," + green.value + "," + blue.value + ")"
  // square.style.backgroundColor = "rgb(93, 137, 90)"
}



changevalue()