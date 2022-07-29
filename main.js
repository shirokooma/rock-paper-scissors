//call getComputerChoice()
getComputerChoice();

//testing
const playerSelection = 'SciSSoRs';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));









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
    //init variable playerScore and set = 0
    //init variable computerScore and set = 0
    //create function displayScore
        //display playerScore
        //display computerScore
    //for 5 game rounds
        //get computerSelection
        //get playerSelection from prompt
        //call function playRound
        //if winMessage
            //then add 1 to current playerScore
            //call funtion display Score
        //if loseMessage
            //then add 1 to current computerScore
            //call function displayScore
        //if tieMessage
            //call function displayScore
    //if playerScore is greater than computerScore
        //then display the player wins!
    //if playerScore is less than computerScore
        //then display the player loses!
    //if playerScore is equal to computerScore
        //then display there is a tie!