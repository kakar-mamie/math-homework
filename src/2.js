// function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// function to generate a random math problem
function getRandomProblem() {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = ["+", "-", "*", "/"][Math.floor(Math.random() * 4)];
  let equation;

  switch (operator) {
    case "+":
      equation = `${num1} + ${num2}`;
      break;
    case "-":
      equation = `${num1} - ${num2}`;
      break;
    case "*":
      equation = `${num1} * ${num2}`;
      break;
    case "/":
      equation = `${num1} / ${num2}`;
      break;
  }

  return { equation, num1, num2 };
}

// function to check if the user's answer is correct
function checkAnswer(userAnswer) {
  const problem = getRandomProblem();
  const correctAnswer = eval(problem.equation);

  if (correctAnswer === userAnswer) {
    return true;
  } else {
    return false;
  }
}
