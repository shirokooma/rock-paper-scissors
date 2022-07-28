//call getComputerChoice()
getComputerChoice();









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