// window.onload = function () {
// create a buttom- attribure "onclick = function created in js. in my fuction create console.log("button was clicked") to test code
// when start button is clicked, it needs to reveal questions
var startButton = document.getElementById("start-button");

    startButton.addEventListener("click", function() {
    document.getElementById("start-quiz").style.visibility = "hidden";

    var questionsDiv = document.getElementById("questions-div");
    var questionWrapper = document.getElementById("questionWrapper");

     // create a h2 element 
    // create question text in h2 element 
    // questionWrapper.removeChild(questionsDiv);

    var questionText = document.createElement("h2");
    questionText.textContent = allQuestions[0].question;
    questionsDiv.appendChild(questionText);
      
    // create a for loop through the answers (a, b, c) that creates checkbox and label element for each
    // creating checkbox element
    var answers = allQuestions[0].answer;

    for (const property in answers) {
        console.log(`${property}: ${answers[property]}`);
     
      
    var checkbox = document.createElement('input');
        
    // Assigning the attributes
    // to created checkbox
    checkbox.type = "checkbox";
    checkbox.value = property; //if statement to verify if answer is correct- if checkbox.value = correctAnswer, alert- correct
    checkbox.id = "answer-" + property;
   
         
    // creating label for checkbox
    var label = document.createElement('label');
        
    // assigning attributes for
    // the created label tag
    label.htmlFor = "answer-" + property;
        
    // appending the created text to
    // the created label tag
    label.appendChild(document.createTextNode(answers[property]));
        
    // appending the checkbox
    // and label to div
    questionsDiv.appendChild(checkbox);
    questionsDiv.appendChild(label);
}
});

// User is presented with 5 questions - array of objects
    //  Format for questions???
    // Object that conatins {question: string, Choices: array, answer: string}
    var allQuestions = [
        {
            question: "What did Michael pretend to fire Pam over in Season 1?",
            answer:  {
                a: "Stealing Post-it Notes",
                b: "Not answering the phone",
                c: "Wearing her glasses"
            },
            questionId: 1,
            correctAnswer: "a"
        },
        {
            question: "What does Kevin suggest Dwight put in his gun holster?",
            answer: {
                a: "A cell phone",
                b: "A banana",
                c: "A toy gun"
            },
            questionId: 2,
            correctAnswer: "b"
        },
        {
            question: "What did Kevin buy for himself when he got himself for Secret Santa?",
            answer: {
                a: "A foot massager",
                b: "A foot bath",
                c: "M&M's"
            },
            questionId: 3,
            correctAnswer: "b"
        },
        {
            question: "What's Stanley's morning 3 by 5?",
            answer: {
                a: "Hot tea, 3 sugars, 5 creams",
                b: "Iced tea, 3 sugars, 5 creams",
                c: "Coffee, 3 sugars, 5 creams"
            },
            questionId: 4,
            correctAnswer: "b"
        },
        {
            question: "What radio station stickers are seen around the office?",
            answer: {
                a: "Froggy 901",
                b: "Dr. Ira Glass",
                c: "Froggy 101"
            },
            questionId: 5,
            correctAnswer: "c"
        }
    ];

    
   
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
    // var endScore = localStorage.setItem()
    // var playerInitials = localStorage.setItem()

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