// HTML elements
var startButt = document.getElementById("start-btn");
var nextButt = document.getElementById("next-btn");
var qContainerEl = document.getElementById("question-container");
var qEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
// Questions/Answers
var questionOne = 'What is the framework of a webpage?';
var answerQ1 = [
            { text: 'A wood 2x4', correct: false },
            { text: 'HTML', correct: true },
            { text: 'True', correct: false },
            { text: 'False', correct: false }
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
    showQ();
    showAns();
})
// show question function
function showQ() {
    qContainerEl.classList.remove("hide")
    qEl.replaceWith(string, questionOne)
}

// showing answer
function showAns() {
    answerButtonEl.classList.remove("hide")
    

}
// function for reseting questions
// calling next question

