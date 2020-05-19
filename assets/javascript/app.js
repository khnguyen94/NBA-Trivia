// Initialize Question Set
let questions = [
    {
        question: "Which player has scored the most points in a single game?", 
        answers: ["Michael Jordan", "Wilt Chamberlain", "Lebron James", "John Stockton"], 
        correctAnswer: "",
        correctAnswerImg: ""
    }, 
    {
        question: "What is the name of mascot for the former Seattle Team?", 
        answers: ["Screech", "Speedy", "Sentinel", "Squatch"], 
        correctAnswer: "Squatch",
        correctAnswerImg: "./assets/images/squatch.jpg"
    }, 
    {
        question: "Who was the Finals MVP for the 2001 NBA championship?", 
        answers: ["Shaquille O'Neil", "Charles Barkley", "Allen Iverson", "Tracy McGrady"], 
        correctAnswer: "Shaquille O'Neil",
        correctAnswerImg: "./assets/images/shaq.jpg"
    }, 
    {
        question: "This person and Magic Johnson were considered the one of the best duos in the 1980s era LA Lakers.", 
        answers: ["Byron Scott", "Tyron Lue", "James Worthy", "Kareem Abdul-Jabbar"],
        correctAnswer: "Kareem Abdul-Jabbar",
        correctAnswerImg: "./assets/images/kareem.jpg"
    }, 
    {
        question: "Gregg Popovich is currently the headcoach of this NBA team", 
        answers: ["Washington Wizards", "Milwalkee Bucks", "San Antonio Spurs", "Miami Heat"],
        correctAnswer: "San Antonio Spurs",
        correctAnswerImg: "./assets/images/greggpop.jpg"
    }, 
    {
        question: "Ray Allen is the all time 3-point leader with this many made 3s. ", 
        answers: ["2973", "1418", "953", "1993"], 
        correctAnswer: "2973",
        correctAnswerImg: "./assets/images/rayallen.jpg"
    }, 
    {
        question: "This player's nickname was The Dream.", 
        answers: ["Hakeem Olajuwon", "Bill Russell", "Pete Maravich", "Tony Parker"], 
        correctAnswer: "Hakeem Olajuwon",
        correctAnswerImg: "./assets/images/hakeem.jpg"
    }, 
    {
        question: "Which one of these players is from Argentina?", 
        answers: ["Andrei Kirilenko", "Giannis Antekouompo", "Manu Ginobli", "Serge Ibaka"], 
        correctAnswer: "Manu Ginobli",
        correctAnswerImg: "./assets/images/manu.jpg"
    }, 
    {
        question: "Ron Artest changed his name and now goes by this.", 
        answers: ["Big Boy", "Tough Love", "Slick Rick", "Metta World Peace"], 
        correctAnswer: "Metta World Peace",
        correctAnswerImg: "./assets/images/metta.jpg"
    }
]; 

// Initialize copy of questions
let questionsCopy;

// Initialize score counter variables
let correct; 
let incorrect; 

// Initialize time variables
// timer will hold setInterval
let timer; 
let timerStartTime = 30;

// Initialize game variables 
let currentQuestion; 
let countdownTimer; 

// Get reference to the DOM elements
let triviaAreaDisp = $("#trivia-area-disp"); 
let countdownText = $("#counter-text"); 

// Create the game object
let game = {
    // Set all variables to necessary values
    questionsCopy: questions, 
    currentQuestion: 0, 
    countdownTimer: timerStartTime, 
    correct: 0, 
    incorrect: 0, 
    
    // Create the countdown function
    countdownFunc: () => {
        // Decrement the counter by interval of 1
        this.countdownTimer -= 1; 

        // Update the DOM element to reflect counter value
        countdownText.text(this.countdownTimer); 

        // If countdownTimer reaches 0
        if (this.countdownTimer === 0) {
            // Console.log that time is up
            console.log("Time is up!");
            
            // Run the timeUp function
            this.ontimeupdate();
        }; 
    }, 

    // Create a function to render questionCards
    // this.currentQuestion
    // this.questionsCopy
    renderQuestionCardsFunc = (number, array) => {
        // Loop through the array using the number as interval
        for (number = 0; number < array.length; number++) {
            // Create a new html h2 tag for 
        }
    }, 

    // Create a function to load in a new question
    loadQuestion: () => {
        // Define the timer using setInterval function
        // Bind
        timer = setInterval(this.countdownFunc.bind(this), 1000)

        // Access the triviaAreaDisp and create a new HTML
    }, 


    // Create the countdown 
};