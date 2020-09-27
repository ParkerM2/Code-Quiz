
//starting logic for game
let i = 0;

// $("#true").on("click", () => {
//     $("#true").addClass("w3-green")
//     $("#false").removeClass("w3-red")
// });
// $("#false").on("click", () => {
//     $("#false").removeClass("w3-red")
//     $("#false").removeClass("w3-cyan")
//     $("#true").removeClass("w3-green")
//     $("#false").addClass("w3-red")
// });

$(".start").on("click", () => {
    $(".start").addClass("w3-hide");
    $(".game").addClass("w3-show")
    console.log("start onclick", i)
    startGame();
})
// function to start the game
function startGame() {
// starts game at question 1 or index[0]
    questions[0].askQuestion();
    callQuestion();
}
function callQuestion() {
// logic for true or false answers
    $("#true").on("click", () => {
        $("#true").addClass("w3-green")
        $("#false").removeClass("w3-red")
// need to add +1 to score here
    });
    $("#false").on("click", () => {
        $("#false").removeClass("w3-red")
        $("#false").removeClass("w3-cyan")
        $("#true").removeClass("w3-green")
        $("#false").addClass("w3-red")
    });
    $("#next").on("click", () => {
        nextQuestion();
    })
// need to add timer function here(or in global scope? not sure yet)
}
function nextQuestion() {
    questions[i].askQuestion()
    i++
}
// function nextQuestion() {
//     console.log("nextQuestion i", i)
//     questions[i].askQuestion();
//     callQuestion();
// }
