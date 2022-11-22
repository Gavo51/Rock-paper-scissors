let playerScore=0;
let computerScore=0;
let roundCounter=0;


const buttons = document.querySelectorAll(".choice-btn");
const roundResult = document.querySelector(".results-box");
const cpuDisplay = document.querySelector(".cpu-display");
const scoreboard = document.querySelector(".scoreboard");
const container = document.querySelector(".container");
const roundDisplay = document.querySelector(".round-counter");

buttons.forEach(button => button.addEventListener('click',playRound));

console.log(roundCounter);
console.log(playerScore);
console.log(computerScore);

roundDisplay.textContent= `ROUND ${roundCounter}`;


function showFinalResults() {

    const winnerAnnounment = document.createElement("h1");
    const finalScores = document.createElement("h2");
    const replayBtn = document.createElement("button");

    if(playerScore==5){
        winnerAnnounment.textContent = 'THE PLAYER WINS!';
    }else if( computerScore == 5){
        winnerAnnounment.textContent = 'THE CPU WINS!';
    }

    finalScores.textContent = "PLAYER = "+playerScore+" / CPU= "+computerScore;

    replayBtn.textContent = 'PLAY AGAIN';
    replayBtn.classList.add('btn','border');
    replayBtn.addEventListener('click',function() {location.reload()});


    
    container.setAttribute('style','align-items:center;padding:20px 0');
    container.appendChild(winnerAnnounment);
    container.appendChild(finalScores);
    container.appendChild(replayBtn);

}

function updateScoreboard() {

    if(playerScore == 5 || computerScore == 5){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        } 
        showFinalResults();   
        return;
    } else {
        scoreboard.textContent = `PLAYER = ${playerScore} || CPU = ${computerScore}`;
        scoreboard.textContent = `PLAYER = ${playerScore} || CPU = ${computerScore}`;
        roundCounter++;
        return;
    }
   
}

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
function playRound(e) {

    const playerSelection= e.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();

    cpuDisplay.textContent = computerSelection.toUpperCase();

    if(playerSelection===computerSelection){
        roundResult.textContent=`It's a tie! ${playerSelection} is equal to ${computerSelection}`;
        updateScoreboard();
        //return;
    } else {
  
        switch(playerSelection) {
            case 'rock':
                switch(computerSelection) {
                    case 'paper':
                        roundResult.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
                        computerScore++;
                        updateScoreboard();
                        //return 0;
                    break;
                    case 'scissors':
                        roundResult.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        updateScoreboard();
                        //return 1;
                    break;
                }
            break;

            case 'paper':
                switch(computerSelection) {
                    case 'rock':
                        roundResult.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        updateScoreboard();
                        //return 1;
                    break;                  
                    case 'scissors':
                        roundResult.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
                        computerScore++;
                        updateScoreboard();
                        //return 0;
                    break;
                }
            break;
                
            case 'scissors':
                switch(computerSelection) {
                    case 'rock':
                        roundResult.textContent=`You lose! ${computerSelection} beats ${playerSelection}`;
                        computerScore++;
                        updateScoreboard();
                        //return 0;
                    break;
                    case 'paper':
                        roundResult.textContent=`You win! ${playerSelection} beats ${computerSelection}`;
                        playerScore++;
                        updateScoreboard();
                        //return 1;
                    break;
                }
            break;
           
        } // end if playerSelection switch

    } // end of else    

    return;

} // end of playRound function



function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i=1; i<=5; i++){

        console.log(`ROUND ${i} !!`);

        const playerSelection = prompt('Choose rock,paper or scissors:').toLowerCase();
        const computerSelection = getComputerChoice();

        let result = playRound(playerSelection,computerSelection);
        
        if(result === 1){
            playerScore++;
        }else if(result ===0) {
            computerScore++;
        }

   }   

    console.log(`FINAL SCORES: PLAYER = ${playerScore} || COMPUTER=${computerScore}`);

    if(playerScore > computerScore) {
        console.log(`THE PLAYER WINS!`)
    } else if (computerScore > playerScore) {
            console.log(`THE COMPUTER WINS!`)
        } else {
            console.log(`IT'S A TIE!`)
        }
   
}

//game();


    





    




