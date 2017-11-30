// Trival countdown timer start number
var number = 13;

// Variable that will hold the interval ID
// when "run" function is executed.
var = intervalId;

// Set decrenment function to run on window load
window.onload = function() {
  intervalId = setInterval(decrement, 1000);
}

// When window loads, this function will be executed
function decrement() {

  //Decrease number by one.
  number--;

  
}
