## Project 4 Guess a number

``` HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body style="background-color:#212121; color:#fff">
    <div id="wrapper">
        <h1>Number guessing game</h1>
        <p>Try and guess a random number between 1 and 100.</p>
        <p>You have 10 attempts to guess the right number.</p>
        <br>
        <form class="form">
            <label2 for="guessField" id="guess">Guess a number</label>
                <input type="text" id="guessField" class="guessfield">
                <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
        </form>
        <div class="resultParas">
            <p>Previous Gussess: <span class="gussess"></span></p>
            <p>Gussess Remaning: <span class="lastResult">10</span></p>
            <p class="lowOrHi"></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>


```


``` Javascript
let  randomNumber = parseInt(Math.random() * 100 + 1)
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.gussess')
const remaning = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

const validateGuess = (guess) => {
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a number more than 1')
    }
    else if(guess >= 100){
        alert("Please enter a number less than 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

const checkGuess = (guess) => {
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too low`)
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too high`)
    }
}

const displayGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}

const displayMessage = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaning.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true

    })
}



```