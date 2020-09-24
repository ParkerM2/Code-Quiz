//starting logic for game

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    startGame();
})

// function to start the game
function startGame() {
    questions[0].askQuestion();
    console.table(questions)
}