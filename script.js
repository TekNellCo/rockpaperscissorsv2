let buttons = document.querySelectorAll('.choice');
let result = document.querySelector('.result');
let playerS = document.querySelector('.playerscore');
let computerS = document.querySelector('.computerscore');

let playerScore = 0;
let computerScore = 0;

let array = ["rock","paper","scissors"];
let gameResult = ["You win,","Computer wins,","Tie,"];

function game(pC, cC){
    if(pC === cC){
        return  gameResult[2]
    }else if( pC === array[0] && cC == array[1]){
        return  gameResult[1]
    }else if(pC === array[0] && cC == array[2] ){
        return  gameResult[0]
    }else if(pC === array[1] && cC == array[2]){
        return  gameResult[1]
    }else if (pC === array[1] && cC == array[0]){
        return  gameResult[0]
    }else if (pC == array[2] && cC == array[1]){
        return  gameResult[0]
    }else if(pC == array[2] && cC == array[0]){
        return  gameResult[1]
    }else{return
    }
}

function computerChoice(){
    let number = Math.floor(Math.random() * 98);
    if(number <= 32 ){
        return cC = 0;
    }else if (number <= 65){
        return cC = 1;
    }else if (number <= 98 ){
        return cC = 2;
    }
}

function scoreBoard(result){
    if(computerScore === 5){
        alert("game over")
    }else if (playerScore === 5){
        alert("player wins")
    }else if( result === gameResult[0]){
        playerS.textContent = `Player score : ${++playerScore}`;
    }else if( result === gameResult[1]){
        computerS.textContent = `Computer score : ${++computerScore}`;
    }else{return}
}

function resultColor(resultString){
    if(resultString === gameResult[0]){
        result.style.color = "var(--color-dark-pink)"
    }else if(resultString === gameResult[1]){
        result.style.color = "var(--color-purple-pink)"
    }else{
        result.style.color = "var(--color-peach)"
    }
}

buttons.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let pC = e.dataset.choice;
        let cC = computerChoice();
        let resultString = game(array[`${pC}`], array[`${cC}`]);
        scoreBoard(resultString);
        resultColor(resultString);
        return result.textContent = `${resultString} you selected ${array[pC]} and computer selected ${array[cC]}`;
    })
})













for(i=0; i < 0; ++i){
    
}