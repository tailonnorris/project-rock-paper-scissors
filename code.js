function getComputerChoice (max,min){
   return Math.floor(Math.random() * (max - min + 1)+ min) 
}




let juego = 6 

let playerWins = 0
let computerWins = 0 

for (let i = 1; i < juego; i++) {

    let computer = getComputerChoice(3,1)
    let player = prompt("1 for rock, 2 for paper,3 for scissors")
    
    function game(playerSelection,computerSelection){
        if (playerSelection == computerSelection) {
            console.log("You choosed the same, its a draw!")
        }
        else if (playerSelection == 1 && computerSelection == 3){
            console.log("Rock beats sicssors, You win!")
            playerWins++ 
        }
        else if (playerSelection == 2 && computerSelection == 1){
            console.log("Paper beats rock, you win!!")
            playerWins++ 
        }
        else if (playerSelection == 3 && computerSelection == 2){
            console.log("Scissors beats paper, you win!!")
            playerWins++ 
        }
        else if (computerSelection == 1 && playerSelection == 3){
            console.log ("Rock beats sicssors, You lose!!")
            computerWins++
        }
        else if (computerSelection == 2 && playerSelection == 1){
            console.log ("Paper beats rock, you lose!!")
            computerWins++
        }
        else if (computerSelection == 3 && playerSelection == 2 ){
            console.log ("Scissors beats paper, you lose!!")
            computerWins++
        }
        else{
            console.log("Please choose a correct option")
            i--
        }
    
    }
    
    game(player, computer)
}

function score (){
    if (playerWins > computerWins){
        console.log("You won " + playerWins + " rounds, and your opponent won " + computerWins + " rounds You won the game!!")
    }
    else if (computerWins > playerWins){
        console.log("You won " + playerWins + " rounds, and your opponent won  " + computerWins + " rounds You lost the game!!")
    }
    else{
        console.log("its a draw!!!")
    }
}

score()