
// array of objects (questions with answers)
const questions = [
    {
        question: "What is HTML?",
        answers:
                {
                    "A coding language": true,
                    "A random acronym": false,
                    "A dog": false,
                    "A robot": false
        },
        askQuestion: function () {
            //create question on screen
            let questionDiv = $('<h1 class="w3-bar w3-jumbo w3-center question">' + this.question + '</h1>')
            $("#questionCard").html(questionDiv)
            //create answer on screen
            Object.keys(this.answers).map(item => {
                let answerBtn = $('<div class="w3-bar w3-button answers">' + item + '</div>')
                $("#questionCard").append(answerBtn)
            })}
    },
    {
        question: "What is a Function?",
        answers:
                {
                    "A type of car": false,
                    "A popular song name": false,
                    "A useful tool in javascript": true,
                    "A computer": false,
        },
        askQuestion: function () {
            //create question on screen
            let questionDiv = $('<h1 class="w3-bar w3-jumbo w3-center question">' + this.question + '</h1>')
            $("#questionCard").html(questionDiv)
            //create answer on screen
            Object.keys(this.answers).map(item => {
                let answerBtn = $('<div class="w3-bar w3-button answers">' + item + '</div>')
                $("#questionCard").append(answerBtn)
            })}
    },
    {
        question: "What is a laptop?",
        answers:
                {
                    "a book": false,
                    "A computer designed to sit on your lap": true,
                    "A skateboard": false,
                    "A robot": false
        },
        askQuestion: function () {
            //create question on screen
            let questionDiv = $('<h1 class="w3-bar w3-jumbo w3-center question">' + this.question + '</h1>')
            $("#questionCard").html(questionDiv)
            //create answer on screen
            Object.keys(this.answers).map(item => {
                let answerBtn = $('<div class="w3-bar w3-button answers">' + item + '</div>')
                $("#questionCard").append(answerBtn)
            })}
    },
    {
        question: "What is CSS?",
        answers:
            {    
                    "Random Acronym" : false,
                    "Popular name": false,
                    "Type of Doggo": false,
                    "Cascading Style Sheets": true,
        },
        askQuestion: function () {
            //create question on screen
            let questionDiv = $('<h1 class="w3-bar w3-jumbo w3-center question">' + this.question + '</h1>')
            $("#questionCard").html(questionDiv)
            //create answer on screen
            Object.keys(this.answers).map(item => {
                let answerBtn = $('<div class="w3-bar w3-button answers">' + item + '</div>')
                $("#questionCard").append(answerBtn)
            })}
    },
];


