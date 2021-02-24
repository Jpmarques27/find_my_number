
/*
document.querySelector('.message').textContent= 'Correct Number';

document.querySelector('.number').textContent= '13';
document.querySelector('.score').textContent= '20';

document.querySelector('.guess').value;
*/

const aguin = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)
let high = 0
let score = 10;

document.querySelector('.check').addEventListener('click', ()=>{
   
    const guess = Number(document.querySelector('.guess').value)

    if(!guess | guess >= 20){
        document.querySelector('.message').textContent = 'No vaild Number try again';

    }else if (guess === secretNumber){
        document.querySelector('.message').textContent= 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').textContent = guess;
        if(score > high){
            high = score
            document.querySelector('.highscore').textContent = high;
    
        }

    }else if(guess > secretNumber){
        if(score >= 1){
        document.querySelector('.message').textContent= 'To High!';
        score --
        document.querySelector('.score').textContent = score 
        document.querySelector('.guess').value = '';

        }else{
            document.querySelector('.message').textContent= 'You Lost The Game';
            document.querySelector('.guess').value = '';
        }
    }else if(guess < secretNumber){
        if(score >= 1){
        document.querySelector('.message').textContent= 'To Low!';
        score --
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';

        }else{
            document.querySelector('.message').textContent= 'You Lost The Game';
            document.querySelector('.guess').value = '';
        }
    }
});

 aguin.addEventListener('click',()=>{
    score = 10;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    console.log(secretNumber)

    document.querySelector('body').style.backgroundColor = '#222'

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?'
    
    document.querySelector('.message').textContent= 'Start guessing..';
    
    document.querySelector('.guess').value = '';
    
 })

