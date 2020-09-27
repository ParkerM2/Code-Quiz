
//starting logic for game
let i = 0;
$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    console.log("start onclick", i)
    startGame();
})

// function to start the game
function startGame() {
    questions[0].askQuestion();
    callQuestion();
    console.log("startGame function", i)
}

function callQuestion() {
    console.log("call question function", i)
    $("#true").on("click", () => {
        $("#true").addClass("w3-green")
        $("#false").removeClass("w3-red")
    });
    $("#false").on("click", () => {
        $("#false").removeClass("w3-red")
        $("#true").removeClass("w3-green")
        $("#false").addClass("w3-red")
    });
    $("#next").on("click", () => {
        questions[i].askQuestion()
        i++
    })

}

// function nextQuestion() {
//     console.log("nextQuestion i", i)
//     questions[i].askQuestion();
//     callQuestion();
// }
