// Trivia game countdown timer start number
var number = 5;

// Variable that will hold the interval ID
// when "run" function is executed.
var intervalId;

//When Start button is clicked, this function will execute the run function.
$('#start').on("click", run);


//Set decrenment function to run on start button click
//Function will also reset countdown timer and hide start button
function run() {
  number = 5;
  $('#start').hide();
  intervalId = setInterval(decrement, 1000);
}


// When window loads, this function will be executed
function decrement() {

  //Decrease number by one.
  number--;

  // Display number on page
  $('#timer').html("<h2>" + number + "</h2>");

  //Once the timer hits zero, the function will stop.
  //Also, alert user that time is up, show start button again, and reset timer.
  if (number === 0) {

    stop();
    alert("On no! Time's up, homie. Unfortunately, the haters have won. :(");
    $('#start').show();
    $('#timer').html('');
  }
}

//Stop function
function stop() {

  clearInterval(intervalId);
}
