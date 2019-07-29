/* 
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if lost
- Let player choose to play again
*/
// GAME VALUES
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI ELEMENTS
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.getElementById('guess-btn'),
    guessInput = document.getElementById('guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
    console.log(1);
})

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
// Validate input 
if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
}
// Check if won
if(guess === winningNum){
    gameOver(true, `${winningNum} is correct! YOU WIN!`);    
} else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0){
       gameOver(false, `Game over! YOU LOST! The correct number was ${winningNum}`);
    } else {
        // Game continues - answer wrong
        // Change border color
        guessInput.style.borderColor = 'red';
        // Clear input
        guessInput.value = '';
        // Tell user its the wrong number
        setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');

    }
}});

// Set message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

// Game over function to avoid repeating code
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);
    // Play again?
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}