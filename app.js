
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
            ]
    },
    {
        question: "What is a Function?",
        answers:
            [
                "A type of car",
                "A popular song name",
                "A useful tool in javascript",
                "A computer",
            ]
    },
    {
        question: "What is a laptop",
        answers:
            [
                "a book",
                "A computer designed to sit on your lap",
                "A skateboard",
                "A robot",
            ]
    },
    {
        question: "What is CSS",
        answers:
            [
                "Random Acronym",
                "Popular name",
                "Type of Doggo",
                "Cascading Style Sheets",
            ]
    },
];
// console.table(questions);

// Onclick Listener for the start button

$(".start").on("click", () => {
    $(".start").addClass("w3-hide")
    // startGame();
    });


