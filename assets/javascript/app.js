//LIT TRIVIA GAME: Lit = true and Trippin = false. Max clout (score) level is 6,
// which means the user picked the correct option for every statement.
// I hope you don't mind the silly theme. :)

// Trivia game countdown timer start number
var number = 31;

// Variable that will hold the interval ID
// when "run" function is executed.
var intervalId;

//As the user makes choices (true="lit and false="trippin") which
// will increase the counters on correctAnswers and incorrectAnswers.
//They'll each start with 0 points.
var correctAnswers = 0;
var incorrectAnswers = 0;

// Initial "checked" values
var checkedOne = false;
var checkedTwo = false;
var checkedThree = false;
var checkedFour = false;
var checkedFive = false;
var checkedSix = false;


//When Start button is clicked, this function will execute the run function.
$('#start').on("click", run);
  //Set decrenment function to run on start button click
  //Function will also reset countdown timer and hide start button
  function run() {
    number = 31;
    correctAnswers = 0;
    incorrectAnswers = 0;
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
      var userAnswerOne;
      //This records user input's value
      for(; i < lenOne; i++){
        if(radioOne[i].checked) {
          checkedOne = true;
          userAnswerOne = radioOne[i].value;
        }
      }
      //The User's answer will either add points to trueChoices or falseChoices
      if(userAnswerOne === "Lit") {
        correctAnswers++;
      }
      else if (userAnswerOne === "Trippin") {
        incorrectAnswers++;
      }
      $("form1").html(userAnswerOne);
      endGame();
    });


  //Second Question
  $(".choice-2").on("click", function secondAnswer() {
      var radioTwo = document.getElementsByName("choice2");
      var i = 0, lenTwo = radioTwo.length;
      var userAnswerTwo;

      for(; i < lenTwo; i++){
        if(radioTwo[i].checked) {
          checkedTwo = true;
          userAnswerTwo = radioTwo[i].value;
        }
      }
      //The User's answer will either add points to trueChoices or falseChoices
      if(userAnswerTwo === "Trippin") {
        correctAnswers++;
      }
      else if (userAnswerTwo = "Lit") {
        incorrectAnswers++;
      }
      $("form2").html(userAnswerTwo);
      endGame();
    });


  //Third Question
  $(".choice-3").on("click", function thirdAnswer() {
      var radioThree = document.getElementsByName("choice3");
      var i = 0, lenThree = radioThree.length;
      var userAnswerThree;

      for(; i < lenThree; i++){
        if(radioThree[i].checked) {
          checkedThree = true;
          userAnswerThree = radioThree[i].value;
        }
      }
      //The User's answer will either add points to trueChoices or falseChoices
      if(userAnswerThree === "Lit") {
        correctAnswers++;
      }
      else if (userAnswerThree === "Trippin") {
        incorrectAnswers++;
      }
      $("form3").html(userAnswerThree);
      endGame();
    });


  //Fourth Question
  $(".choice-4").on("click", function forthdAnswer() {
      var radioFour = document.getElementsByName("choice4");
      var i = 0, lenFour = radioFour.length;
      var userAnswerFour;

      for(; i < lenFour; i++){
        if(radioFour[i].checked) {
          checkedFour = true;
          userAnswerFour = radioFour[i].value;
        }
      }
      //The User's answer will either add points to trueChoices or falseChoices
      if(userAnswerFour === "Lit") {
        correctAnswers++;
      }
      else if (userAnswerFour === "Trippin") {
        incorrectAnswers++;
      }
      $("form4").html(userAnswerFour);
      endGame();
    });


    //Fifth Question
    $(".choice-5").on("click", function fifthAnswer() {
        var radioFive = document.getElementsByName("choice5");
        var i = 0, lenFive = radioFive.length;
        var userAnswerFive;

        for(; i < lenFive; i++){
          if(radioFive[i].checked) {
            checkedFive = true;
            userAnswerFive = radioFive[i].value;
          }
        }
        //The User's answer will either add points to trueChoices or falseChoices
        if(userAnswerFive === "Trippin") {
          correctAnswers++;
        }
        else if (userAnswerFive === "Lit") {
          incorrectAnswers++;
        }
        $("form5").html(userAnswerFive);
        endGame();
      });


      //Sixth Question
      $(".choice-6").on("click", function sixthAnswer() {
          var radioSix = document.getElementsByName("choice6");
          var i = 0, lenSix = radioSix.length;
          var userAnswerSix;

          for(; i < lenSix; i++){
            if(radioSix[i].checked) {
              checkedSix = true;
              userAnswerSix = radioSix[i].value;
            }
          }
          //The User's answer will either add points to trueChoices or falseChoices
          if(userAnswerSix === "Lit") {
            correctAnswers++;
          }
          else if (userAnswerSix === "Trippin") {
            incorrectAnswers++;
          }
          $("form6").html(userAnswerSix);
          endGame();
        });

//Score evaluations and score alerts.
function endGame() {
  if(correctAnswers == 6 && incorrectAnswers == 0 && number > 0) {
    alert("You scored a clout level of 6 out 6.")
    alert("Fuego alert! Your clout level is turnt up to the max. Great job, fam!")
    location.reload();
  }
  else if(correctAnswers == 5 && incorrectAnswers == 1 && number > 0) {
    alert("You scored a clout level of 5 out of 6.")
    alert("Nice clout game, homie.")
    location.reload();
  }
  else if(correctAnswers == 4 && incorrectAnswers == 2 && number > 0) {
    alert("You scored a clout level of 4 out of 6.")
    alert("Nice clout game, homie.")
    location.reload();
  }
  else if(correctAnswers == 3 && incorrectAnswers == 3 && number > 0) {
    alert("You scored a clout level of 3 out of 6.")
    location.reload();
  }
  else if(correctAnswers == 2 && incorrectAnswers == 4 && number > 0) {
    alert("You scored a clout level of 2 out of 6.")
    location.reload();
  }
  else if(correctAnswers == 1 && incorrectAnswers == 5 && number > 0) {
    alert("You scored a clout level of 1 out of 6.")
    location.reload();
  }
  else if(correctAnswers == 0 && incorrectAnswers == 6 && number > 0) {
    alert("You scored a clout level of 0 out of 6.")
    alert("Woah...")
    location.reload();
  }
}
