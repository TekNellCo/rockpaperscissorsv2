let buttons = document.querySelectorAll('.choice');
let result = document.querySelector('.result');


let array = ["rock","paper","scissors"];
let gameResult = ["You win,","Computer wins,","Tie,"];

function game(pC, cC){
    if(pC === cC){
        return end = gameResult[2]
    }else if( pC === array[0] && cC == array[1]){
        return end = gameResult[1]
    }else if(pC === array[0] && cC == array[2] ){
        return end = gameResult[0]
    }else if(pC === array[1] && cC == array[2]){
        return end = gameResult[1]
    }else if (pC === array[1] && cC == array[0]){
        return end = gameResult[0]
    }else if (pC == array[2] && cC == array[1]){
        return end  = gameResult[0]
    }else if(pC == array[2] && cC == array[0]){
        return end = gameResult[1]
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

buttons.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let pC = e.dataset.choice;
        let cC = computerChoice();
        let resultString = game(array[`${pC}`], array[`${cC}`]);
        return result.textContent = `${resultString} you selected ${array[pC]} and computer selected ${array[cC]}`



    })
})
















