
// generate random number between 0-2 and return rock,paper or scissors 
function getComputerChoice() {

    let randomNum = Math.floor(Math.random()*3);
    let output = '';

        switch(randomNum) {
            case 0:
                output='rock';
                break;
            case 1:
                output='paper';
                break;
            case 2:
                output='scissors';
                break;            
        }

    return output;
}

//Plays a single round of rock-paper-scissors
function playRound(playerSelection, computerSelection) {

    console.log(`Player = ${playerSelection} || Computer = ${computerSelection}`);

    if(playerSelection===computerSelection){
        console.log(`It's a tie! ${playerSelection} is equal to ${computerSelection}`);
        return;
    } else {
        
        switch(playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        console.log("You lose! Paper beats Rock");
                    break;
                    case 'scissors':
                        console.log("You win! Rock beats scissors");
                    break;
                }
            break;

            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        console.log("You win! Paper beats Rock");
                    break;                  
                    case 'scissors':
                        console.log("You lose! Scissors beats Paper")
                    break;
                }
            break;
                
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        console.log("You lose! Rock beats Scissors");
                    break;
                    case 'paper':
                        console.log("You win! Scissors beats Paper");
                    break;
                }
            break;
           
        } // end if playerSelection switch
    } // end of else


    


}

const playerChoice = prompt('Choose rock,paper or scissors:').toLowerCase();

    playRound(playerChoice,getComputerChoice());



