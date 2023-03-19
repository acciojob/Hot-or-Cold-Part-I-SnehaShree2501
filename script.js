//your code here
const respond = document.querySelector('#respond');
const randomNumber =Math.floor(Math.random() * 50 );
console.log(randomNumber)

let guessTry = 1;
let previousDiff = 0;

const btn = document.querySelector('#btn');
btn.addEventListener('click', guessTheDiff);

function guessTheDiff(){
    let guess = document.querySelector('#guess');
    if(guessTry <2){
        if(guess.value == randomNumber){
            respond.textContent = 'Success'
        }
        else if(guess.value <randomNumber){
            respond.textContent = 'Guess higher'
        }
        else{
            respond.textContent = 'guess lower'
        }
    }
    else{
        let diff = guess.value - randomNumber;
        if(guess.value == randomNumber){
            respond.textContent = 'Success'
        }
        else if(diff < previousDiff){
            respond.textContent = 'Getting hotter';
        }
        else if(guess.value < randomNumber){
            respond.textContent = 'guess higher'
        }
        else{
            respond.textContent = 'guess lower'
        }
    }
    previousDiff = guess.value - randomNumber;
    guessTry++;
}