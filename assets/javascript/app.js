// Initialize Question Set
let questions = [
  {
    question: "Which player has scored the most points in a single game?",
    answers: [
      "Michael Jordan",
      "Wilt Chamberlain",
      "Lebron James",
      "John Stockton",
    ],
    correctAnswer: "Wilt Chamberlain",
    correctAnswerImg: "../images/wilt.jpg",
  },
  {
    question: "What is the name of mascot for the former Seattle Team?",
    answers: ["Screech", "Speedy", "Sentinel", "Squatch"],
    correctAnswer: "Squatch",
    correctAnswerImg: "./assets/images/squatch.jpg",
  },
  {
    question: "Who was the Finals MVP for the 2001 NBA championship?",
    answers: [
      "Shaquille O'Neil",
      "Charles Barkley",
      "Allen Iverson",
      "Tracy McGrady",
    ],
    correctAnswer: "Shaquille O'Neil",
    correctAnswerImg: "./assets/images/shaq.jpg",
  },
  {
    question:
      "This person and Magic Johnson were considered the one of the best duos in the 1980s era LA Lakers.",
    answers: [
      "Byron Scott",
      "Tyron Lue",
      "James Worthy",
      "Kareem Abdul-Jabbar",
    ],
    correctAnswer: "Kareem Abdul-Jabbar",
    correctAnswerImg: "./assets/images/kareem.jpg",
  },
  {
    question: "Gregg Popovich is currently the headcoach of this NBA team",
    answers: [
      "Washington Wizards",
      "Milwalkee Bucks",
      "San Antonio Spurs",
      "Miami Heat",
    ],
    correctAnswer: "San Antonio Spurs",
    correctAnswerImg: "./assets/images/greggpop.jpg",
  },
  {
    question:
      "Ray Allen is the all time 3-point leader with this many made 3s. ",
    answers: ["2973", "1418", "953", "1993"],
    correctAnswer: "2973",
    correctAnswerImg: "./assets/images/rayallen.jpg",
  },
  {
    question: "This player's nickname was The Dream.",
    answers: [
      "Hakeem Olajuwon",
      "Bill Russell",
      "Pete Maravich",
      "Tony Parker",
    ],
    correctAnswer: "Hakeem Olajuwon",
    correctAnswerImg: "./assets/images/hakeem.jpg",
  },
  {
    question: "Which one of these players is from Argentina?",
    answers: [
      "Andrei Kirilenko",
      "Giannis Antekouompo",
      "Manu Ginobli",
      "Serge Ibaka",
    ],
    correctAnswer: "Manu Ginobli",
    correctAnswerImg: "./assets/images/manu.jpg",
  },
  {
    question: "Ron Artest changed his name and now goes by this.",
    answers: ["Big Boy", "Tough Love", "Slick Rick", "Metta World Peace"],
    correctAnswer: "Metta World Peace",
    correctAnswerImg: "./assets/images/metta.jpg",
  },
];

// Initialize copy of questions
let questionsCopy;

// Initialize boolean variable to hold game conditions
let gameHasStarted = false;

// Initialize score counter variables
let correctCounter;
let incorrectCounter;

// Initialize time variables
// timer will hold setInterval
let timer;
let counter;
let counterStartTime = 30;

// Initialize game variables
let currentQuestion;

// Get reference to the DOM elements
let triviaAreaDisp = $("#trivia-area-disp");
let scoreAreaDisp;
let questionAreaDisp;
let counterText = $("#counter-text");

console.log(questions[1].answers);

// When the document has finished loading
$(document).ready(function () {
  // Create a function that handles on click for when the player clicks on the startBtn
  $(triviaAreaDisp).on("click", "#start-btn", function () {
    console.log("Start Button Clicked");

    // Change gameHasStarted condition to true
    gameHasStarted = true;

    console.log("Game has started: " + gameHasStarted);

    // Clear triviaAreaDisp
    triviaAreaDisp.empty();

    // Access the game object and run the loadQuestionFunc
    game.loadQuestionFunc();

    // If gameHasStarted then run the countdownFunc
    if (gameHasStarted) {
      game.countdownFunc();
    }
  });

  // Create a function that handles on click for when the player clicks on an answer
  $(triviaAreaDisp).on("click", ".list-group-item", function (event) {
    console.log("Answer Clicked");

    // Get a handle on the data-name for the clicked answer
    let answerDataName = $(event.target).attr("data-name");

    // Run the answerClickFunc and pass in the answerDataName
    game.answerClickFunc(answerDataName);


  });

  // Create the game object
  let game = {
    // Set all variables to necessary values
    setVariablesFunc: () => {
      (questionsCopy = questions),
        (currentQuestion = 0),
        (counter = counterStartTime),
        (correctCounter = 0),
        (incorrectCounter = 0);
    },

    // Create a function to console log all variables to inspect
    inspectVariablesFunc: () => {
      // console.log all variables set above
      if (questionsCopy) {
        console.log("Created Questions Copy");
      }
      console.log("Current Question: " + currentQuestion);
      console.log("Counter: " + counter);
      console.log("Correct Counter " + correct);
      console.log("Incorrect Counter: " + incorrect);
    },

    // Create the countdown function
    countdownFunc: () => {
      // Decrement the counter by interval of 1
      counter--;

      // Update the DOM element to reflect counter value
      $("#counter-text").text(counter);

      // If countdownTimer reaches 0
      if (counter === 0) {
        // Console.log that time is up
        console.log("Time is up!");

        // Run the timeUp function
        game.timeUpFunc();
      }
    },

    // Create a function to load in a question
    loadQuestionFunc: () => {
      // Define the timer using setInterval function
      // Every 1000ms, run the game's countdownFunc
      timer = setInterval(game.countdownFunc, 1000);

      // Create a new html div to hold questionCard
      let questionCard = $("<div>", {
        class: "card bg-light mb-3",
      });

      // Create a new html div to hold timer remaining
      let questionCountdown = $("<div>", {
        class: "card-header",
      }).text("Time Remaining: ");

      // Create a new html div to hold timer text
      let questionCountdownText = $("<p>", {
        id: "counter-text",
      }).text(counter);

      // Create a new html div to hold card header
      let questionHeader = $("<div>", {
        class: "card-header",
      }).text(questionsCopy[currentQuestion].question); // set header text to question

      // Create a new html div for card body
      let questionBody = $("<div>", {
        class: "card-body",
      });

      // Create a new html div for list-group
      let questionListGroup = $("<div>", {
        class: "list-group",
      });

      // Access questionsCopy at the currentQuestion index
      // Loop through each answer and for each create a list-group-item
      for (var i = 0; i < questionsCopy[currentQuestion].answers.length; i++) {
        let questionListGroupItem = $("<button>", {
          type: "button",
          class: "list-group-item list-group-item-action",
          "data-name": questionsCopy[currentQuestion].answers[i],
        }).text(questionsCopy[currentQuestion].answers[i]);

        // Append each listGroupItem to the listGroup
        questionListGroup.append(questionListGroupItem);
      }

      // Construct the questionCard
      questionCard.append(questionCountdown, questionHeader, questionBody);
      questionCountdown.append(questionCountdownText);
      questionBody.append(questionListGroup);

      // Display question and listGroup to triviaAreaDisp
      triviaAreaDisp.append(questionCard);
    },

    // Create a function to handle when to load in the next question
    nextQuestionFunc: () => {
      // Set the countdownTimer to equal the starting time
      game.countdownTimer = timerStartTime;

      // Set the countdownText to be the countdownTimer
      countdownText.text(game.countdownTimer);

      // Then increment the currentQuestion variable by 1
      game.currentQuestion += 1;

      // Then run the loadQuestionFunc
      loadQuestionFunc();
    },

    // Create a function to handlw what happens when time is up
    timeUpFunc: () => {
      // Clear the timer
      clearInterval(timer);

      // Set the counterText to counter
      counterText.html(game.counter);

      // Create a html div for out of time card
      let card = $("<div>", {
        class: "card text-white bg-warning mb-3",
      });

      // Create a html div for card header
      let header = $("<div>", {
        class: "card-header",
      }).text("Out of Time!");

      // Create a html div for card body
      let body = $("<div>", {
        class: "card-body",
      });

      // Create a html div for correct answer
      let correctAnswer = $("<p>", {
        class: "card-text",
      }).text(
        "The correct answer was: " +
          questionsCopy[this.currentQuestion].correctAnswer
      );

      // Create a html div for correct answer image
      let correctAnswerImg = $("<img>", {
        src: questionsCopy[this.currentQuestion].image,
      });

      // Construct the card
      card.append(header, body);
      body.append(correctAnswer, correctAnswerImg);

      // Run the checkAnswerFunc
    },

    results: () => {
      // Clear timer variable
      clearInterval(timer);

      // Create a html div for results card
      let resultsCard = $("<div>", {
        class: "card bg-light mb-3",
      });

      // Create a html div for card header
      let header = $("<div>", {
        class: "card-header",
      }).text("Here are your results: ");

      // Create a html div for card body
      let body = $("<div>", {
        class: "card-body",
      });

      // Create a html div for correct answers
      let correctAnswers = $("<p>", {
        class: "card-text",
      }).text("Correct Answers: " + game.correct);

      // Create a html div for wrong answers
      let incorrectAnswers = $("<p>", {
        class: "card-text",
      }).text("Incorrect Answers: " + game.incorrect);

      // Create a html div for unanswereds
      let unanswereds = $("<p>", {
        class: "card-text",
      }).text(
        "Unanswereds: " +
          // Calculate number of unanswered questions
          // Total number of questions in the array of questions - total numbered of answered questions
          (questionsCopy.length - (game.correct + game.incorrect))
      );

      // Create a button prompting user to restart game
      let restartBtn = $("button", {
        id: "restart-game-btn",
      }).text("Restart Game");

      // Construct the results card
      resultsCard.append(header, body);
      body.append(correctAnswers, incorrectAnswers, unanswereds, restartBtn);

      // Append the card to the triviaAreaDisp
      triviaAreaDisp.append(resultsCard);
    },

    // Create a function to handle what happens when an answer is clicked
    answerClickFunc: (answerStr) => {
      // Clear timer variable
      clearInterval(timer);

      console.log("Answer String: " + answerStr);

      // If that user clicked on an answer with a data-type that matches the correct answer
      if (answerStr === questionsCopy[currentQuestion].correctAnswer) {
        console.log("Correct!");

        // Run correctAnswerFunc();
        game.handleRightAnswerFunc();
      } else {
        console.log("Incorrect!");

        // Run inncorrectAnswerFunc();
        game.handleWrongAnswerFunc();
      }
    },

    // Create a function to handle what happens when an correct answer is clicked
    handleRightAnswerFunc: () => {
      // Clear the timer
      clearInterval(timer);

      // Increment correct answer counter
      correctCounter++;

      // Clear the triviaAreaDisp();
      triviaAreaDisp.empty();

      // Run renderCorrectAnswerCardFunc
      game.renderCorrectAnswerCardFunc();
    },

    // Create a function to render correctAnswerCard
    renderCorrectAnswerCardFunc: () => {
      // Create a new html div for correctAnswerCard
      let correctAnswerCard = $("<div>", {
        class: "card",
      });

      // Create a new html div for header
      let correctAnswerCardHeader = $("<div>", {
        class: "card-header",
      }).text("Correct!");

      // Create a new html div for body
      let correctAnswerCardBody = $("<div>", {
        class: "card-body",
      });

      // Create a new html div for img
      let correctAnswerCardImg = $("<img>", {
        class: "card-img",
        src: questionsCopy[currentQuestion].correctAnswerImg,
      });

      // Construct the card
      correctAnswerCard.append(correctAnswerCardHeader, correctAnswerCardBody);
      correctAnswerCardBody.append(correctAnswerCardImg);

      // Display the correctAnswerCardBody to triviaAreaDisp
      triviaAreaDisp.append(correctAnswerCard);
    },

    // Create a function to handle what happens when an wrong answer is clicked
    handleWrongAnswerFunc: () => {
      console.log("Wrong Answer Function");
    },
  };

  // If the dom has been loaded and the game object has been created, then console log confirmation message that game object has been created
  if (game) {
    console.log("Game object created.");
  }

  game.setVariablesFunc();

  game.inspectVariablesFunc();
});
