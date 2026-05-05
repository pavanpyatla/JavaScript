let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

let randomNum = Math.ceil(Math.random() * 100);

function checkGuess() {
    let userGuess = parseInt(userInput.value);
    if (userGuess === randomNum) {
        gameResult.textContent = "Congratulations! You guessed the number";
        gameResult.style.color = "green";
    } else if (userGuess < randomNum) {
        gameResult.textContent = "Too low! Try again";
        gameResult.style.color = "red";
    } else {
        gameResult.textContent = "Too high! Try again";
        gameResult.style.color = "red";
    }
}