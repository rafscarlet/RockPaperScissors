const rps = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;
let playerChoice = "q-mark";
let computerChoice = "q-mark";
let round = 0;


$(".gesture-btn").on("click", function () {
    playerChoice = this.name;
    computerChoice = rps[Math.floor(Math.random() * 3)];

    $("#your-div img").attr("src", `images/${playerChoice}.svg`);
    $("#comp-div img").attr("src", `images/${computerChoice}.svg`);

    let winner = checkResult(playerChoice, computerChoice);
    showResult(winner);

    $(".gesture-btn").css("pointer-events", "none").fadeTo(1000, 0.5);

    setTimeout(function(){
        round++;
        restart();
        // console.log("timeoutpass")
    }, 2 * 1000);

});


$(".reset-btn").on("click", function(){
    playerScore = 0;
    computerScore = 0;
    round = 0;
    $(".your-score").text(playerScore);
    $(".comp-score").text(computerScore);
    restart();
    $("h1").text(`Pick your weapon!🥁`);
});



function showResult(winner) {
    if (winner === 1) {
        $("h1").text("You Win!😎")
        $("h1").addClass("flash-text");

        $("#your-div img").addClass("grow");
        
        playerScore++;
        $(".your-score").text(playerScore);
        $("#your-div").addClass("flash-text");
        

    } else if (winner === 0) {
        $("h1").text("You Lose!🤔")

        $("#comp-div img").addClass("grow");

        computerScore++;
        $(".comp-score").text(computerScore);
        $("#comp-div").addClass("flash-text");

    } else {
        $("h1").text("It's a Tie...😒")
    }
}

function restart() {
    $("h1").text(`Round ${round}🤓`).removeClass("flash-text")
    $("#your-div img, #comp-div img").removeClass("grow")
    $(".gesture-btn").css("pointer-events", "auto").fadeTo(500, 1);
    $("#your-div, #comp-div").removeClass("flash-text");
    
}


function checkResult(player, comp) {

    console.log(player, comp)
    if (player === comp) return  2;

    switch (player) {
        case "rock": 
            return comp === "paper" ? 0 : 1
        case "paper": 
            return comp === "scissors" ? 0 : 1
        case "scissors": 
            return comp === "rock" ? 0 : 1
    }
};


