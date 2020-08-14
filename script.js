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
        /// **** MAYBE REMOVE EXTRA DIVS AND PASS NEW Q/A THREW THE SAME DIV?? ******////
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
            qContainerEl1.classList.replace("show","hide");
            qContainerEl2.classList.replace("hide", "show");
            showAns2();
            showQ2();
            
        }
    })
}
// QUESTION TWO //  **** Q2 comes up answers to do NOT ???****
function showQ2() {
    // qContainerEl.classList.remove("hide");
    questionTwo.innerHTML = "What is MS Visual Studio Code?";
    var ansbutton = document.getElementById("answer3")
    ansbutton.addEventListener("click", function () {
        if (ansbutton = true) {
            console.log("hio")
            qContainerEl2.classList.replace("show","hide");
            qContainerEl3.classList.replace("hide","show");
            showQ3();
            showAns3();
        }
    })
}
// QUESTION THREE
function showQ3() {
    // qContainerEl.classList.remove("hide");
    questionThree.innerHTML = "what is Google Chrome?";
    var ansbutton = document.getElementById("answer4")
    ansbutton.addEventListener("click", function () {
        if (ansbutton = true) {
            console.log("hji")
            qContainerEl3.classList.replace("show","hide");
            qContainerEl4.classList.replace("hide","show");
            showQ4();
            showAns4();
        }
    })
}
// QUESTION FOUR
function showQ4() {
    // qContainerEl.classList.remove("hide");
    questionFour.innerHTML = "What is an API?";
    var ansbutton = document.getElementById("answer4")
    ansbutton.addEventListener("click", function () {
        if (ansbutton = true) {
            qContainerEl4.classList.replace("show","hide");
            qContainerEl5.classList.replace("hide","show");
            showQ5();
            showAns5();
        }
    })
}
// QUESTION FIVE
function showQ5() {
    // qContainerEl.classList.remove("hide");
    questionFive.innerHTML = "what is a for loop?";
    var ansbutton = document.getElementById("answer3")
    ansbutton.addEventListener("click", function () {
        if (ansbutton = true) {
            qContainerEl5.classList.add("hide");
        
        }
    })
}

// showing answers 1-5
function showAns1() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ1.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ1.an2;
    answerQ1.an2 = true;
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
    answer1.innerHTML = answerQ3.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ3.an2;
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ3.an4;
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ3.an5;
}
function showAns4() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ4.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ4.an2;
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ4.an3;
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ4.an4;
}
function showAns5() {
    var answer1 = document.getElementById("answer1")
    answer1.innerHTML = answerQ5.an1;
    var answer2 = document.getElementById("answer2")
    answer2.innerHTML = answerQ5.an2;
    var answer3 = document.getElementById("answer3")
    answer3.innerHTML = answerQ5.an3;
    var answer4 = document.getElementById("answer4")
    answer4.innerHTML = answerQ5.an4;
}

// questions 1 logic for correct answer
//  function afterQ1() {
//          // show question 2
//     questiontwo.classList.replace("hide", "show")
//         // grab answer-buttons2 to show
//     var grabA = document.getElementById("answer-buttons2")
//     grabA.classList.add("show")
//         // hides question 1
//     questionOne.classList.replace("show", "hide");
//         // grab answer 1 and hides
//     var grab2 = document.getElementById("answer-buttons1")
//     grab2.classList.add("hide");
//             }


// calling next question

