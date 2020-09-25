
//starting logic for game

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    startGame();
})

// function to start the game
function startGame() {
    nextQuestion();
}

function nextQuestion() {
    questions[0].askQuestion();
    console.table(questions[0].answers)
    console.log(Object.values(questions[0].answers))
    $(".answers").on("click", function() {
        if (Object.values(questions[0].answers) === true) {
           alert("correct")
        } else {
           alert("incorrect")
        }
    })
}