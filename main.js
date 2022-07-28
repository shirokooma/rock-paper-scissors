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
getComputerChoice();


