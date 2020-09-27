
// array of objects (questions with answers)
const questions = [
    
        new Question("What is HTML?",
                {
                    "A coding language": true,
                    "A random acronym": false,
                    "A dog": false,
                    "A robot": false
        }),
        new Question( "What is a Function?",
                {
                    "A type of car": false,
                    "A popular song name": false,
                    "A useful tool in javascript": true,
                    "A computer": false,
        }),
    
        new Question("What is a laptop?",
                {
                    "a book": false,
                    "A computer designed to sit on your lap": true,
                    "A skateboard": false,
                    "A robot": false
        }),
        new Question("What is CSS?",
            {    
                    "Random Acronym" : false,
                    "Popular name": false,
                    "Type of Doggo": false,
                    "Cascading Style Sheets": true,
        }),
];

// class or constructor function to create the objects to be displayed on the screen via the askQuestion function
function Question(question, answers) {
    this.question = question;
    this.answers = answers;
    this.val = Object.values(this.answers)
    this.askQuestion = function () {
        let questionDiv = $('<h1 class="w3-bar w3-jumbo w3-center w3-teal question">' + this.question + '</h1>')
        $("#questionCard").html(questionDiv)
        Object.entries(this.answers).map(item => {
            let answerBtn = $('<div id="'+ item[1] +'" class="w3-bar w3-button w3-cyan w3-hover-teal w3-padding  w3-large answers">' + item[0] + '</div>')
            $("#questionCard").append(answerBtn)
        })
    }
}

