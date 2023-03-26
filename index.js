let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreboard_div = document.querySelector(".score_boeard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




//computer choices
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") {
        return "ELEPHANT";
    } 
    
    if (letter === "p") {
        return "ANT"; 
    } else {
        return "ANTEATER";
    }
    
    
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)} <br> <h2>"You Win"</h2>`;

    function gameOver() {
        if (userScore == 5) {
            alert("You WIN, Wanna Play Again")
        } else if (computerScore == 5) {
            alert("You LOSE, Do you want to get your Revenge?")
        }
    }
    gameOver();
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)} <br> <h2>"You Lose"</h2>`;

    function gameOver() {
        if (userScorer == 5) {
            alert("You WIN, Wanna Play Again")
        } else if (computerScore == 5) {
            alert("You LOSE, Do you want to get your Revenge?")
        }
    }
    gameOver();
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(computerChoice)} <br> <h2>"DRAW"</h2>`;

    function gameOver() {
        if (userScore == 5) {
            alert("You WIN, Wanna Play Again")
        } else if (computerScore == 5) {
            alert("You LOSE, Do you want to get your Revenge?")
        }
    }
    gameOver();
}


//choices
setTimeout(game, 10000);
function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    if(computerChoice == "r" ) {
        document.getElementById('compPick').innerText = "Elephant";
        // document.getElementById('compPick').innerText = "Elephant";
    } else if (computerChoice == "p") {
        document.getElementById('compPick').innerText = "Ant";
        // document.getElementById('compPick').innerText = "Ant";
    } else {
        document.getElementById('compPick').innerText = "Ant-eater";
        // document.getElementById('compPick').innerText = "Ant-eater";        
    }

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            // console.log ("Player Wins");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            // console.log ("Player loses");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            // console.log ("Its a draw");
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
        document.getElementById('userPick').innerText = "Elephant";
    })

    paper_div.addEventListener('click', function() {
        game("p");
        document.getElementById('userPick').innerText = "Ant";
        //console.log("You chose Ant");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
        document.getElementById('userPick').innerText = "Ant-eater";
        // console.log("You chose Anteater");
    })
}

main();


   




  

