const aguin = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random()*20) + 1;
console.log(secretNumber)
let high = 0
let score = 10;

const displayMessage = (message) =>{
    document.querySelector('.message').textContent=message
}

document.querySelector('.check').addEventListener('click', ()=>{
   
    const guess = Number(document.querySelector('.guess').value)

    if(!guess | guess > 20){
        displayMessage( ' No vaild Number try again') 

    }else if (guess === secretNumber){
        displayMessage( 'Correct Number!')

        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').textContent = guess;
        if(score > high){
            high = score
            document.querySelector('.highscore').textContent = high;
        }


    }else if(guess !== secretNumber){
        if(score > 1){
           displayMessage(guess > secretNumber ?'To High!' : 'To Low!');
            score --
            document.querySelector('.score').textContent = score 
            document.querySelector('.guess').value = '';
    }else{
        displayMessage( 'You Lost The Game')
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
    
    displayMessage( 'Start guessing..')
    
    document.querySelector('.guess').value = '';
    
 })

