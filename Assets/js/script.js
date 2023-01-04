// create a buttom- attribure "onclick = function created in js. in my fuction create console.log("button was clicked") to test code
// when start button is clicked, it needs to reveal questions
var startButton = document.getElementById("#start-button");
var click = "hidden"

function startQuiz() {
    if (click === "hidden") {
        click === "reveal"
    }
console.log("button was clicked");
}
// User is presented with 5 questions - array of objects
    //  Format for questions???
        // Object that conatins {question: string, Choices: array, answer: string}
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next quesrion access array of questions object 
    // if answer is incorrect add 15 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page

// var timerCountdown = document.querySelector(".timer");
// var secondsLeft = 5;

// set timer to count down from 50 to 0. When it's at 0, display message "you lose"
// function setTime() {
// var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timerCountdown.textContent = "Timer:" + secondsLeft
//     if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         alert("You Lose!");
//         // clearInterval(timerInterval);
// };
// }, 1000);
// };
// setTime();

