
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
        correct: "A coding language"
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
        correct: "a useful tool in javascript"
    },
    {
        question: "What is a laptop",
        answers:
            [
                "a book",
                "A computer designed to sit on your lap",
                "A skateboard",
                "A robot",
            ],
        correct: "A computer designed to sit on your lap"
    },
    {
        question: "What is CSS",
        answers:
            [
                "Random Acronym",
                "Popular name",
                "Type of Doggo",
                "Cascading Style Sheets",
            ],
        correct: "Cascading Style Sheets"
    },
];
 console.table(questions);

// Onclick Listener for the start button

$(".start").on("click", () => {
    $(".start").addClass("w3-hide")
    // startGame();
});
    
// creating function for inserting answers
function insertAnswer() {
    for (i = 0; i < 4; i++){
        $(".answer" + i).text(questions[0].answers[i])
    }
}


const startGame = function () {
    
    
    
    
}
startGame();
insertAnswer()
