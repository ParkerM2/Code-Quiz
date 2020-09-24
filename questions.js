
// array of objects (questions with answers)
const questions = [
    {
        question: "What is HTML?",
        answers:
            [
                {"A coding language": true},
                {"A random acronym": false},
                {"A dog": false},
                {"A robot": false},
            ],
    },
    {
        question: "What is a Function?",
        answers:
            [
                {"A type of car": false},
                {"A popular song name": false},
                {"A useful tool in javascript": true},
                {"A computer": false},
            ],
    },
    {
        question: "What is a laptop?",
        answers:
            [
                {"a book": false},
                {"A computer designed to sit on your lap": true},
                {"A skateboard": false},
                {"A robot": false},
            ],
    },
    {
        question: "What is CSS?",
        answers:
            [
                {"Random Acronym" : false},
                {"Popular name": false},
                {"Type of Doggo": false},
                {"Cascading Style Sheets": true},
            ],
    },
];

// function for calling question 0 with answers
function askQuestionZero() {
    $(".question").html(questions[0].question)
    $(".answer0").html(questions[0].answers)
    $(".answer1").html(questions[0].answers[1])
    $(".answer2").html(questions[0].answers[2])
    $(".answer3").html(questions[0].answers[3])
}


// function for calling question one with answers
function askQuestionOne() {
    $(".question").html(questions[1].question)
    $(".answer0").html(questions[1].answers[0])
    $(".answer1").html(questions[1].answers[1])
    $(".answer2").html(questions[1].answers[2])
    $(".answer3").html(questions[1].answers[3])
}

// function for calling question two with answers
function askQuestionTwo() {
    $(".question").html(questions[2].question)
    $(".answer0").html(questions[2].answers[0])
    $(".answer1").html(questions[2].answers[1])
    $(".answer2").html(questions[2].answers[2])
    $(".answer3").html(questions[2].answers[3])
}

// function for calling question three with answers
function askQuestionThree() {
    $(".question").html(questions[3].question)
    $(".answer0").html(questions[3].answers[0])
    $(".answer1").html(questions[3].answers[1])
    $(".answer2").html(questions[3].answers[2])
    $(".answer3").html(questions[3].answers[3])
}
