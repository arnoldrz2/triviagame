// Trivia game countdown timer start number
var number = 31;

// Variable that will hold the interval ID
// when "run" function is executed.
var intervalId;

//Points Counter will tally how many answers are correct
//It'll start of with 0
var points = 0;


//When Start button is clicked, this function will execute the run function.
$('#start').on("click", run);


  //Set decrenment function to run on start button click
  //Function will also reset countdown timer and hide start button
  function run() {
    number = 31;
    points = 0;
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
      alert("On no! Time's up, homie. The haters have won. :(");
      location.reload();
    }
  }

  //Stop function
  function stop() {
    clearInterval(intervalId);
  }


// Trivia Game Response Functions
// lit = true
// trippin = false

  //First Question
  $(".choice-1").on("click", function firstAnswer() {
      var radioOne = document.getElementsByName("choice1");
      var i = 0, lenOne = radioOne.length;
      var checkedOne = false;
      var userAnswerOne;

      for(; i < lenOne; i++){
        if(radioOne[i].checked) {
          checkedOne = true;
          userAnswerOne = radioOne[i].value;
        }
      }
      //Correct answer will add points to the user's score.
      if(userAnswerOne === "lit") {
        points++;
      }
      else {
        points--;
      }
      endGame();
    });


  //Second Question
  $(".choice-2").on("click", function secondAnswer() {
      var radioTwo = document.getElementsByName("choice2");
      var i = 0, lenTwo = radioTwo.length;
      var checkedTwo = false;
      var userAnswerTwo;

      for(; i < lenTwo; i++){
        if(radioTwo[i].checked) {
          checkedTwo = true;
          userAnswerTwo = radioTwo[i].value;
        }
      }
      //Correct answer will add points to the user's score.
      if(userAnswerTwo === "trippin") {
        points++;
      }
      else {
        points--;
      }
      endGame();
    });


  //Third Question
  $(".choice-3").on("click", function thirdAnswer() {
      var radioThree = document.getElementsByName("choice3");
      var i = 0, lenThree = radioThree.length;
      var checkedThree = false;
      var userAnswerThree;

      for(; i < lenThree; i++){
        if(radioThree[i].checked) {
          checkedThree = true;
          userAnswerThree = radioThree[i].value;
        }
      }
      //Correct answer will add points to the user's score.
      if(userAnswerThree === "lit") {
        points++;
      }
      else {
        points--;
      }
      endGame();
    });


  //Fourth Question
  $(".choice-4").on("click", function forthdAnswer() {
      var radioFour = document.getElementsByName("choice4");
      var i = 0, lenFour = radioFour.length;
      var checkedFour = false;
      var userAnswerFour;

      for(; i < lenFour; i++){
        if(radioFour[i].checked) {
          checkedFour = true;
          userAnswerFour = radioFour[i].value;
        }
      }
      //Correct answer will add points to the user's score.
      if(userAnswerFour === "lit") {
        points++;
      }
      else {
        points--;
      }
      endGame();
    });


    //Fifth Question
    $(".choice-5").on("click", function fifthAnswer() {
        var radioFive = document.getElementsByName("choice5");
        var i = 0, lenFive = radioFive.length;
        var checkedFive = false;
        var userAnswerFive;

        for(; i < lenFive; i++){
          if(radioFive[i].checked) {
            checkedFive = true;
            userAnswerFive = radioFive[i].value;
          }
        }
        //Correct answer will add points to the user's score.
        if(userAnswerFive === "trippin") {
          points++;
        }
        else {
          points--;
        }
        endGame();
      });


      //Sixth Question
      $(".choice-6").on("click", function sixthAnswer() {
          var radioSix = document.getElementsByName("choice6");
          var i = 0, lenSix = radioSix.length;
          var checkedSix = false;
          var userAnswerSix;

          for(; i < lenSix; i++){
            if(radioSix[i].checked) {
              checkedSix = true;
              userAnswerSix = radioSix[i].value;
            }
          }
          //Correct answer will add 1 point to the user's score.
          if(userAnswerSix === "lit") {
            points++;
          }
          //Incorrect answer will subtract -1 point from user's score.
          else {
            points--;
          }
          endGame();
        });

//Evaluate score
function endGame() {
  if(points === 6 && number > 0) {
    alert("Fuego alert! Your lit level is turnt up to the max. Great job, fam!")
    location.reload();
  }
}
