//starting logic for game

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    startGame();
})

// function to start the game
function startGame() {
    askQuestionZero();
}