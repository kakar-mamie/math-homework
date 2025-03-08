function getRandomCode() {
  var code = "";
  for (var i = 0; i < 10; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}
