var questionContainer = document.getElementById("questions-container")
var startBtn = document.querySelector("#start");
var score = ""; 
var hideIntro = document.querySelector(".quiz-intro");
var timerElement = document.querySelector("#timer"); 
var timer;
var timerCount;

var questions = [
    {
        question: "Which symbols refer to assignment operators?",
        choices: ["+,  - , *, **,  /, %, ++, - -",  "=, +=, -=, *=, /=, %=, **=",  "||, &&, !"],
        answer: "=, +=, -=, *=, /=, %=, **="
    },
    {
        question: "Which is NOT a JavaScript data type?",
        choices: ["Alert", "Boolean", "Null"],
        answer: "Alert"
    },
    {
        question: "What is NOT best practice in naming JavaScript variables?",
        choices: ["Using camel case", "Starting with a letter, $ or underscore", "Using Javascript’s reserved keywords"], 
        answer: "Using Javascript’s reserved keywords"
    }, 
    {
        question: "Which brackets are used to define arrays?", 
        choices: ["( )", "[ ]", "{ }"], 
        answer: "[ ]"
    },
    {
        question: "Which of the following most commonly requires the user to input a value?",
        choices: ["Alert", "Confirm", "Prompt"],
        answer: "Prompt"
    }
]
let i = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    timerCount = 60;
    hideIntro.style.display = 'none'; 
    questionContainer.style.display = 'block'; 
    console.log(hideIntro); 
    showQuestions();
    startTimer();
}

function transition() {
    i++
    showQuestions();
}

function showQuestions () {
    var currentQuestion = questions[i]; 
    var h1El = document.querySelector("#prompt");
    var listEl = document.createElement("li");
    var ulEl = document.querySelector("ul");
    ulEl.innerHTML = ''; 
    var answerSelect = document.querySelectorAll(".button1"); 

    h1El.textContent = questions[i].question
    for (let a = 0; a < questions[i].choices.length; a++) {
        var listEl = document.createElement("li");
        var buttonEl = document.createElement("button");
        buttonEl.classList.add("button1");
        buttonEl.textContent = questions[i].choices[a];
        listEl.appendChild(buttonEl);
        ulEl.appendChild(listEl);
        buttonEl.setAttribute("onclick", "transition()"); 
        }
}



function startTimer() {

    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }