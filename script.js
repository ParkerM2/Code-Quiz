// HTML elements
var startButt = document.getElementById("start-btn");
var nextButt = document.getElementById("next-btn");
var qContainerEl = document.getElementById("question-container");
var qEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
// Questions/Answers
var questionOne = document.getElementById("question1");

var answerQ1 = [
    "A wood 2x4", 
    "HTML", 
    "True", 
    "False",
]
var questionTwo = 'What is MS Studio Code?';
var answerQ2 = [
            { text: 'A music editing program', correct: false },
            { text: 'A 5Star Restaurant', correct: false },
            { text: 'A text editor', correct: true },
            { text: 'None of the above', correct: false },
]
            
var questionThree = 'What is Google Chrome?';
var answerQ3 = [
            { text: 'Music editing program', correct: false },
            { text: 'Web Browser', correct: true },
            { text: 'A and B', correct: false },
            { text: 'C and None of the Above', correct: false }
]           
var questionFour = 'What is an API?';
var answerQ4 = [
            { text: 'A 2000s Punk Rock Band', correct: false },
            { text: 'Set of functions etc', correct: true },
            { text: 'Color of spray paint', correct: false },
            { text: 'internet browser', correct: false }
        ]
var questionFive = 'What is a for loop?';
var answerQ5 = [
            { text: 'A Hot Wheels Toy', correct: false },
            { text: 'Type of osteoporisis', correct: true },
            { text: 'A code name for Loopdloop', correct: false },
            { text: 'None of the Above', correct: false }
        ]

// timer

// startbutton
startButt.addEventListener("click", function () {
    showQ1();
    showAns1();
})
// show question function
function showQ1() {
    // qContainerEl.classList.remove("hide");
    questionOne.innerHTML = "Name a Webpage Framework";
}

// showing answer
function showAns1() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerq1[1];
    

}
// function for reseting questions
// calling next question

