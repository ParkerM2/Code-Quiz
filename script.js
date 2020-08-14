// HTML elements
var startButt = document.getElementById("start-btn");
var nextButt = document.getElementById("next-btn");
var qContainerEl1 = document.getElementById("question-container")
var qContainerEl2 = document.getElementById("question-container2")
var qContainerEl3 = document.getElementById("question-container3")
var qContainerEl4 = document.getElementById("question-container4")
var qContainerEl5 = document.getElementById("question-container5")
var qEl = document.getElementById("question");
var questionOne = document.getElementById("question1");
var questionTwo = document.getElementById("question2");
var questionThree = document.getElementById("question3");
var questionFour = document.getElementById("question4");
var questionFive = document.getElementById("question5");
var answerQ1 = {
    an1 : "A wood 2x4", 
    an2 : "HTML", 
    an3 : "True", 
    an4 : "False",
}
var answerQ2 = {
    an1 : 'A music editing program', 
    an2 : 'A 5Star Restaurant',
    an3 : 'A text editor',
    an4 : 'None of the above',
}
// SS
var answerQ4 = {
    an1 : 'A 2000s Punk Rock Band',
    an2 : 'Set of functions etc',
    an3 : 'Color of spray paint',
    an4 : 'internet browser',
}
var answerQ5 = {
    an1 : 'A Hot Wheels Toy',
    an2 : 'Type of osteoporisis',
    an3 : 'A code name for Loopdloop',
    an4 : 'None of the Above',
}
// Questions/Answers
        
// timer

// start button
startButt.addEventListener("click", function () {
    showQ1();
    showAns1();
})

// QUESTION ONE //
function showQ1() {
    // qContainerEl.classList.remove("hide");
    questionOne.innerHTML = "Name a Webpage Framework";
    var ansbutton = document.getElementById("answer2")
    ansbutton.addEventListener("click", function () {
        if (ansbutton = true) {
            qContainerEl1.classList.add("hide");
            qContainerEl2.classList.remove("hide");
            showQ2();
            showAns2();
        }
    })
}
// QUESTION TWO //
function showQ2() {
    // qContainerEl.classList.remove("hide");
    questionTwo.innerHTML = "What is MS Visual Studio Code?";
}
// QUESTION THREE
function showQ3() {
    // qContainerEl.classList.remove("hide");
    questionThree.innerHTML = "what is Google Chrome?";
}
// QUESTION FOUR
function showQ4() {
    // qContainerEl.classList.remove("hide");
    questionFour.innerHTML = "What is an API?";
}
// QUESTION FIVE
function showQ5() {
    // qContainerEl.classList.remove("hide");
    questionFive.innerHTML = "what is a for loop?";
}

// showing answers 1-5
function showAns1() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ1.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ1.an2;
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ1.an3;
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ1.an4;
}
function showAns2() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ2.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ2.an2;
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ2.an3;
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ2.an4;
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

// questions 1 logic for correct answer
 function afterQ1() {
         // show question 2
    questiontwo.classList.replace("hide", "show")
        // grab answer-buttons2 to show
    var grabA = document.getElementById("answer-buttons2")
    grabA.classList.add("show")
        // hides question 1
    questionOne.classList.replace("show", "hide");
        // grab answer 1 and hides
    var grab2 = document.getElementById("answer-buttons1")
    grab2.classList.add("hide");
            }


// calling next question

