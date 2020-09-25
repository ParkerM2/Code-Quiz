//defining variables to shuffle questions
let shuffleQuestions, questionIndex;

//starting logic for game

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    startGame();
})

// function to start the game
function startGame() {
    console.table(questions)
    console.log(Question);

    //displaying question/answer one
    questions[0].askQuestion();
}

function nextQuestion() {
    
}