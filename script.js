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
var questionTwo = document.getElementById("question2");
var answerQ2 = [
            'A music editing program', 
            'A 5Star Restaurant',
            'A text editor',
            'None of the above'
]          
var questionThree = document.getElementById("question3");
var answerQ3 = [
            'Music editing program',
            'Web Browser',
            'A and B',
            'C and None of the Above',
]           
var questionFour = document.getElementById("question4");
var answerQ4 = [
            'A 2000s Punk Rock Band',
            'Set of functions etc',
            'Color of spray paint',
            'internet browser',
]
var questionFive = document.getElementById("question5");
var answerQ5 = [
            'A Hot Wheels Toy',
            'Type of osteoporisis',
            'A code name for Loopdloop',
            'None of the Above',
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

function showQ2() {
    // qContainerEl.classList.remove("hide");
    questionTwo.innerHTML = "What is MS Visual Studio Code?";
}
function showQ3() {
    // qContainerEl.classList.remove("hide");
    questionThree.innerHTML = "what is Google Chrome?";
}
function showQ4() {
    // qContainerEl.classList.remove("hide");
    questionFour.innerHTML = "What is an API?";
}
function showQ5() {
    // qContainerEl.classList.remove("hide");
    questionFive.innerHTML = "what is a for loop?";
}

// showing answers
function showAns1() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ1[0];
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ1[1];
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ1[2];
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ1[3];
}
function showAns2() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ2[0];
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ2[1];
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ2[2];
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ2[3];
}
function showAns3() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ3[0];
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ3[1];
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ3[2];
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ3[3];
}
function showAns4() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ4[0];
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ4[1];
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ4[2];
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ4[3];
}
function showAns5() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ5[0];
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ5[1];
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ5[2];
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ5[3];
}



// function for reseting questions
// calling next question

