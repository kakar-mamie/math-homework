
<script>
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function generateMathQuestion(difficulty) {
  if (difficulty === "easy") {
      const operands = [2, 3];
      const operator = ["+", "-"];
      const question = `${operands[0]}${operator[0]}${operands[1]} = `;
      return question;
    } else if (difficulty === "medium") {
        const operands = [getRandomInt(10), getRandomInt(10)];
        const operator = ["+", "-", "*", "/"];
        const question = `${operands[0]}${operator[getRandomInt(4)]}${operands[1]} = `;
      return question;
    } else if (difficulty === "hard") {
        const operands = [getRandomInt(20), getRandomInt(20)];
        const operator = ["+", "-", "*", "/"];
        const question = `${operands[0]}${operator[getRandomInt(4)]}${operands[1]} = `;
      return question;
    } else {
      throw new Error("Invalid difficulty level");
    }
}
function generateMathAnswers(difficulty) {
  if (difficulty === "easy") {
      const operands = [2, 3];
      const operator = ["+", "-"];
      const answer = operands[0] + operands[1];
      return answer;
    } else if (difficulty === "medium") {
        const operands = [getRandomInt(10), getRandomInt(10)];
        const operator = ["+", "-", "*", "/"];
        let answer;
        switch (operator[getRandomInt(4)]) {
          case "+":
            answer = operands[0] + operands[1];
            break;
          case "-":
            answer = operands[0] - operands[1];
            break;
          case "*":
            answer = operands[0] * operands[1];
            break;
          case "/":
            answer = operands[0] / operands[1];
            break;
        }
      return answer;
    } else if (difficulty === "hard") {
        const operands = [getRandomInt(20), getRandomInt(20)];
        const operator = ["+", "-", "*", "/"];
        let answer;
        switch (operator[getRandomInt(4)]) {
          case "+":
            answer = operands[0] + operands[1];
            break;
          case "-":
            answer = operands[0] - operands[1];
            break;
          case "*":
            answer = operands[0] * operands[1];
            break;
          case "/":
            answer = operands[0] / operands[1];
            break;
        }
      return answer;
    } else {
      throw new Error("Invalid difficulty level");
    }
}
</script>