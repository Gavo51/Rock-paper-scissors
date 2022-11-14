// generate random number between 0-2 and return rock,paper or scissors 
function getComputerChoice() {

    let randomNum = Math.floor(Math.random()*3);
    let output = '';

        switch(randomNum) {
            case 0:
                output='Rock';
                break;
            case 1:
                output='Paper';
                break;
            case 2:
                output='Scissors';
                break;            
        }

    return output;
}


for (let i=0; i<10 ; i++){
    console.log(getComputerChoice());
}