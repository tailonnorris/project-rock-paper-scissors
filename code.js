function getComputerChoice (max,min){
   return Math.floor(Math.random() * (max - min + 1)+ min) ;
};

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const getWinnerRound = document.querySelector('container__game-result')

let playerWins = 0 
let computerWins = 0 

buttonRock.addEventListener('click', () => { startGame('rock',getComputerChoice(3,1))});
buttonPaper.addEventListener('click', () => { startGame('paper',getComputerChoice(3,1))});
buttonScissors.addEventListener('click', () => { startGame('scissors',getComputerChoice(3,1))});

const startGame = (player,computer)=>{
    if (computer == 1){computer = 'rock'}
    else if(computer == 2){computer = 'paper'} 
    else{computer = 'scissors' };

    if(player == computer){
        document.querySelector('.resultText').innerHTML= `You played ${player} and computer played ${computer}, it's a draw!`
    } 
    
    else if (player == 'rock' && computer == "scissors" || player == 'scissors' && computer == "paper" ||player == 'paper' && computer == "rock"){
        document.querySelector('.resultText').innerHTML=`You played ${player} and computer played ${computer}, YOU WIN!!`
        playerWins++
    } 
    
    else{
        document.querySelector('.resultText').innerHTML= `You played ${player} and computer played ${computer}, Computer wins!!!`
        computerWins++
    }

    if (playerWins === 5 || computerWins === 5){
        buttonRock.disabled = true;
        buttonPaper.disabled = true;
        buttonScissors.disabled = true;
        endGame()
    }
}

function endGame(){
    if (playerWins > computerWins){
        const divPlayerwWins = document.querySelector('.container__score')

        const content = document.createElement('div')
        content.classList.add('content')
        content.textContent = 'You win the Game!!'

        divPlayerwWins.appendChild(content)
    }
    else if (computerWins > playerWins){
        const divPlayerwWins = document.querySelector('.container__score')

        const content = document.createElement('div')
        content.classList.add('content')
        content.textContent = 'Computer wins the Game!!'

        divPlayerwWins.appendChild(content)
    }
}