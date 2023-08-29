const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let a, b, c;

function callbackForA(answer) {
  a = answer;
  rl.question("Enter b: ", callbackForB);
}
function callbackForB(answer) {
  b = answer;
  rl.question("Enter c: ", callbackForC);
}
function callbackForC(answer) {
  c = answer;
  calculateResult(a, b, c);
}

function calculateResult(a, b, c) {
  console.log(a + b + c);
  rl.close();
}
rl.question("Enter a: ", callbackForA);
