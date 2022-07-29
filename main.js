//call game()
game();









//create function called getComputerChoice
function getComputerChoice(){
    //create variable randomNumber
    let randomNumber;
   
    //generate a random number 1 - 3 
    //and store in randomNumber
    randomNumber = Math.floor(Math.random()*(3) + 1);
    
    //create variable computerSelection
    let computerSelection;
    
    //create switch statement with condition randomNumber
    switch (randomNumber){
        //if number is 1, then return "ROCK"
        case 1:
            computerSelection = 'ROCK';
            break;
        //if number is 2, then return "PAPER"
        case 2:
            computerSelection = 'PAPER';
            break;
        //if number is 3, then return "SCISSORS"
        case 3:
            computerSelection = 'SCISSORS'
    }
    return computerSelection;
}
//create function playRound with inputs
//playerSelection and computerSelection
function playRound(playerSelection, computerSelection){
    //make playerSelection uppercase and store in upperPlayerSelection
    let upperPlayerSelection = playerSelection.toUpperCase();
    
    //create variables for win, lose, and tie messages
    let winMessage = `You win! ${upperPlayerSelection} beats ${computerSelection}!`;
    let loseMessage = `You lose! ${computerSelection} beats ${upperPlayerSelection}!`;
    let tieMessage = "Oops! It's a tie! No one wins!";
    
    //if upperPlayerSelection is equal to computerSelection
    if (upperPlayerSelection === computerSelection){
        //output tieMessage
        return tieMessage;

    //if there is a win condition for player
    } else if ((upperPlayerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
               (upperPlayerSelection === 'PAPER' && computerSelection === 'ROCK') ||
               (upperPlayerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ){  //output winMessage
        return winMessage;

    //if there is a lose condition for player
    } else if ((upperPlayerSelection === 'ROCK' && computerSelection === 'PAPER') ||
               (upperPlayerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
               (upperPlayerSelection === 'SCISSORS' && computerSelection === 'ROCK')
    ){  //output loseMessage
        return loseMessage;
    }
}
//create function game
function game(){
    //init variable playerScore and set = 0
    //init variable computerScore and set = 0
    let playerScore = 0;
    let computerScore = 0;

    //for 5 game rounds
    for (let i = 0; i < 5 ; i++){
        //create function displayScore
        function displayScore(){
            //display playerScore
            //display computerScore
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        }
        //get computerSelection
        const computerSelection = getComputerChoice();
        //get playerSelection from prompt
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        //call function playRound and store in result
        let result = playRound(playerSelection, computerSelection);
        //display result
        console.log(result);
        //if result is equal to tieMessage
        if (result.includes('Oops!')){
        //call function displayScore
        displayScore();
        //if result is equal to winMessage
        } else if (result.includes('You win!')){
            //then add 1 to current playerScore
            playerScore += 1;
            //call funtion displayScore
           displayScore();
        //if result is equal to loseMessage
        } else if (result.includes('You lose!')){
            //then add 1 to current computerScore
            computerScore += 1;
            //call function displayScore
            displayScore();
        }

    }
    //if playerScore is greater than computerScore
    if (playerScore > computerScore){
        //then display the player wins!
        console.log('You win!')
    //if playerScore is less than computerScore
    } else if (playerScore < computerScore){
        //then display the player loses!
        console.log('You lose!')
    //if playerScore is equal to computerScore
    } else if (playerScore === computerScore){
        //then display there is a tie!
        console.log("It's a tie!")
    }
}
