
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



const playerChoice = prompt('Choose rock,paper or scissors:').toLowerCase();


console.log(playRound(playerChoice,getComputerChoice()));