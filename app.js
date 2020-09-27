
//starting logic for game

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    startGame();
})

// function to start the game
function startGame() {
    firstQuestion();
}

function firstQuestion() {
    for (i = 0; i < questions.length; i++){
        questions[i].askQuestion();

        $("#true").on("click", () => {
            $("#true").addClass("w3-green")
            $("#false").removeClass("w3-red")
        });
        $("#false").on("click", () => {
            $("#true").removeClass("w3-green")
            $("#false").addClass("w3-red")
            console.table(questions[i])
        });}
 }