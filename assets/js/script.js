// window.onload = function () {
// create a buttom- attribure "onclick = function created in js. in my fuction create console.log("button was clicked") to test code
// when start button is clicked, it needs to reveal questions
var secondsLeft = 60;
var questionsDiv = document.getElementById("questions-div");
var questionWrapper = document.getElementById("questionWrapper");
var questionIndex = 0;
var startButton = document.getElementById("start-button");
var timerInterval;

startButton.addEventListener("click", function() {
document.getElementById("start-quiz").style.display = "none";
generateQuestions();
setTime();
});
var timerCountdown = document.querySelector(".timer");
timerCountdown.textContent = secondsLeft

function setTime() {
    timerInterval = setInterval(function() {
        secondsLeft--;
        timerCountdown.textContent = "Timer:" + secondsLeft
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endGame();
        };
    }, 1000);
};


function generateQuestions() {
    var questionText = document.createElement("h2");
    questionsDiv.innerHTML= "";
    questionText.textContent = allQuestions[questionIndex].question;
    questionsDiv.appendChild(questionText);
    document.getElementById("answer").innerHTML= "";
    for (var i=0; i < allQuestions[questionIndex].answer.length; i++) {
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent=allQuestions[questionIndex].answer[i];
        choiceBtn.setAttribute("value", allQuestions[questionIndex].answer[i]);
        choiceBtn.onclick = checkAnswers;
        document.getElementById("answer").append(choiceBtn);
    }

    console.log(allQuestions[0].question);
    console.log(allQuestions[0].answer);
};

function checkAnswers() {
if (this.value === allQuestions[questionIndex].correctAnswer) {
    document.getElementById("answer-message").textContent = "Correct! 5 seconds added to timer!";
    secondsLeft += 5;
    timerCountdown.textContent = "Timer:" + secondsLeft
} else {
    document.getElementById("answer-message").textContent = "Incorrect, minus 10 seconds from timer!";
    secondsLeft -= 10;
    timerCountdown.textContent = "Timer:" + secondsLeft
    if (secondsLeft <= 0) {
        secondsLeft = 0
        endGame();
    }
} 
    questionIndex++ 
    if (questionIndex === allQuestions.length) {
        endGame();
    } else {
        generateQuestions();
    }
};

function endGame() {
    questionWrapper.style.display = "none";
    document.getElementById("final-score").classList.remove("hidden");
    document.getElementById("answer-message").style.display = "none";
    document.getElementById("score").textContent = secondsLeft;
    clearTimeout(timerInterval);
    document.getElementById("submit-btn").onclick = saveScore; 
};

function saveScore() {
    var playerName = document.getElementById("initial-box").value;
    //localStorage.setItem(playerName, secondsLeft);
    var userList = localStorage.getItem("userList");
    if (userList === undefined || userList === null) {  
        userList = {[playerName]: secondsLeft};
        localStorage.setItem("userList", JSON.stringify(userList));
    }
    else {
        var userListJSON = JSON.parse(userList);
        userListJSON[playerName] = secondsLeft;
        localStorage.setItem("userList", JSON.stringify(userListJSON));
    }
    location.href = "./highscore.html";

    // "user" : {"KP" : 34, "AP" : 40}

}

var allQuestions = [
    {
        question: "What did Michael pretend to fire Pam over in Season 1?",
        answer: ["Stealing Post-it Notes", "Not answering the phone", "Wearing her glasses"],
        questionId: 1,
        correctAnswer: "Stealing Post-it Notes"    
    },
        
    {
        question: "What does Kevin suggest Dwight put in his gun holster?",
        answer:["A cell phone", "A banana", "A toy gun"],
        questionId: 2,
        correctAnswer: "A banana"
        },
        
    {
        question: "What did Kevin buy for himself when he got himself for Secret Santa?",
        answer: ["A foot massager", "A foot bath", "M&M's"],
        questionId: 3,
        correctAnswer: "A foot bath"
        },
        
    {
        question: "What's Stanley's morning 3 by 5?",
        answer: ["Hot tea, 3 sugars, 5 creams", "Iced tea, 3 sugars, 5 creams", "Coffee, 3 sugars, 5 creams"],
        questionId: 4,
        correctAnswer: "Iced tea, 3 sugars, 5 creams"
        },
        
    {
        question: "What radio station stickers are seen around the office?",
        answer: ["Froggy 901", "Dr. Ira Glass", "Froggy 101"],
        questionId: 5,
        correctAnswer: "Froggy 101"
        },
];

    
   
        // Display question - loop
        //  append question
        // append choices array

// user selects an answer(button,radio,checkboxes)data-answer = ""
    //  click event is on the parent container
    //  how to know which element was clicked(event.target)
    // if the answer is correct display next question access array of questions object 
    // if answer is incorrect subtract 10 seconds to score and display next question

    //  When all questions are answered display form to submit initials
    //  save form values score and initials to local STrorage
    // var endScore = localStorage.setItem()
    // var playerInitials = localStorage.setItem()

//  change to highscores HTML
    //  read values from localstorage
    //  append score values to page


    // savescore is going to grab the value of input and get to local storage
    // create a for loop through the answers (a, b, c) that creates checkbox and label element for each
    // creating checkbox element
    // var answers = allQuestions[0].answer;

    // // for (const property in answers) {
    // //     console.log(`${property}: ${answers[property]}`);

    // for (var i = 0; i < answer.length; i++) {

    // }
     
      
// var checkbox = document.createElement('input');
    
// // Assigning the attributes
// // to created checkbox
// checkbox.type = "checkbox";
// checkbox.value = allQuestions.answer;
// // checkbox.value = property; //if statement to verify if answer is correct- if checkbox.value = correctAnswer, alert- correct
// checkbox.id = "answer-" + property;

        
// // creating label for checkbox
// var label = document.createElement('label');
    
// // assigning attributes for
// // the created label tag
// label.htmlFor = "answer-" + property; //should this now be answer[]
    
// // appending the created text to
// // the created label tag
// label.appendChild(document.createTextNode(answers[property]));
    
// // appending the checkbox
// // and label to div
// questionsDiv.appendChild(checkbox);
// questionsDiv.appendChild(label);

// to display a message if the answer is correct or incorrect




// could this be one way of hiding / revealing my questions?
                    // var ul = document.parent("questions-div").createElement('ul');
                    //         document.body.appendChild(ul);

                    // var li1 = document.createElement('li');
                    // var li2 = document.createElement('li');
                    // ul.appendChild(li1);
                    // ul.appendChild(li2);

                    // function hide(evt) {
                    //   // evt.target refers to the clicked <li> element
                    //   // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
                    //   evt.target.style.visibility = 'hidden';
                    // }

                    // Attach the listener to the list
                    // It will fire when each <li> is clicked
                    // ul.addEventListener('click', hide, false);



// User is presented with 5 questions - array of objects
    //  Format for questions???
    // Object that conatins {question: string, Choices: array, answer: string}