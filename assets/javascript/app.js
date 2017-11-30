

// Trival countdown timer start number
var number = 31;

// Variable that will hold the interval ID
// when "run" function is executed.
var intervalId;

//When Start button is clicked, this function will execute the run function.
$('#start').on("click", run);


// Set decrenment function to run on start button click
function run() {
  intervalId = setInterval(decrement, 1000);
}


// When window loads, this function will be executed
function decrement() {

  //Decrease number by one.
  number--;

  // Display number on page
  $('#timer').html("<h2>" + number + "</h2>");

  //Once the timer hits zero, the function will stop.
  if (number === 0) {

    stop();
    alert("Time's up, homie.");
  }
}

//Stop function
function stop() {

  clearInterval(intervalId);
}
