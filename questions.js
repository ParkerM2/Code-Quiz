
// array of objects (questions with answers)
const questions = [
    {
        question: "What is HTML?",
        answers:
            [
                "A coding language",
                "A random acronym",
                "A dog",
                "A robot",
            ],
        correct: "A coding language",
    },
    {
        question: "What is a Function?",
        answers:
            [
                "A type of car",
                "A popular song name",
                "A useful tool in javascript",
                "A computer",
            ],
        correct: "A useful tool in javascript",
    },
    {
        question: "What is a laptop?",
        answers:
            [
                "a book",
                "A computer designed to sit on your lap",
                "A skateboard",
                "A robot",
            ],
        correct: "A computer designed to sit on your lap",
    },
    {
        question: "What is CSS?",
        answers:
            [
                "Random Acronym",
                "Popular name",
                "Type of Doggo",
                "Cascading Style Sheets",
            ],
        correct: "Cascading Style Sheets",
    },
];

// function for calling question 0 with answers
function askQuestionZero() {
    $(".question").html(questions[0].question)
    $(".answer0").html(questions[0].answers[0])
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