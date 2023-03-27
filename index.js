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
        if (userScore == 3) {
            setAttr();
            setAttr2()

            
        } else if (computerScore == 3) {
            setAttr3();
            setAttr4();
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
        if (userScore == 3) {
            setAttr();
            setAttr2()

            
        } else if (computerScore == 3) {
            setAttr3();
            setAttr4();
        }
    }
    gameOver();
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)} ties ${convertToWord(computerChoice)} <br> <h2>"DRAW"</h2>`;

    function gameOver() {
        if (userScore == 3) {
            setAttr();
            setAttr2()
            
        } else if (computerScore == 3) {
            setAttr3();
            setAttr4();
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

// YOU WIN ANIMATION
function setAttr() {
    let image1 = document.getElementById('imgSet');
    image1.setAttribute('src', 'confeti.gif');
    image1.style.visibility = "visible";
    image1.style.opacity = "1";
}
function setAttr2() {
    let image2 = document.getElementById('imgSet2');
    image2.setAttribute('src', 'youWin2.png');
    image2.style.visibility = "visible";
    image2.style.opacity = "1";
}

// YOU LOOSE ANIMATION
function setAttr3() {
    let image3 = document.getElementById('imgSet3');
    image3.setAttribute('src', 'bomb-explode2.gif');
    image3.style.visibility = "visible";
    image3.style.opacity = "1";
}
function setAttr4() {
    let image4 = document.getElementById('imgSet4');
    image4.setAttribute('src', 'youLose2.png');
    image4.style.visibility = "visible";
    image4.style.opacity = "1";
}












// function setAttr2() {
//     let image2 = document.getElementById('imgSet2');
//     image2.setAttribute('src', 'youWin.png');
// }
// function setAttr3() {
//     let image3 = document.getElementById('imgSet2');
//     image3.setAttribute('src', 'youLose.png');
// }



// function removeAttr() {
//     let image = document.getElementById('imgSet');
//     image.removeAttribute('src');
// }





   




  

