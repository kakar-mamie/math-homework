function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomCode() {
  const max = 10;
  let randomNumber = getRandomInt(max);
  let code = "";
  for (let i = 0; i < randomNumber; i++) {
    code += String.fromCharCode(getRandomInt(26) + 97);
  }
  return code;
}

// Example output: "abc"
console.log(getRandomCode());