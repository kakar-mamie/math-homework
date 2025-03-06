// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Get the user's input for the problem
const userInput = prompt("Enter your answer: ");

// Check if the user's input is correct
if (userInput === getRandomNumber()) {
  alert("Correct!");
} else {
  alert("Incorrect. The correct answer is " + getRandomNumber());
}
