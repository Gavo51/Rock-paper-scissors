
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
        return `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
        
    } else {

    /*   
        if(playerSelection === 'rock' && computerSelection === 'scissors'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
        

        if(playerSelection === 'paper' && computerSelection === 'rock'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
        

        if(playerSelection === 'scissors' && computerSelection === 'paper'){            
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return `You lose! ${computerSelection} beats ${playerSelection} `;
            }
    }*/

    

        
        switch(playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                    break;
                    case 'scissors':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    break;
                }
            break;

            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    break;                  
                    case 'scissors':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
                    break;
                }
            break;
                
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                    break;
                    case 'paper':
                        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                    break;
                }
            break;
           
        } // end if playerSelection switch

    

    } // end of function


    




const playerChoice = prompt('Choose rock,paper or scissors:').toLowerCase();

    console.log(playRound(playerChoice,getComputerChoice()));




