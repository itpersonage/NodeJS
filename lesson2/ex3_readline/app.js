const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('SIGINT', () => {
  console.log('SIGINT');
  process.exit(123);
})


// const path = require('path');
// const nodePath = args[0].split(path.sep).pop();
// const scriptPath = args[1].split(path.sep).pop();
// if(!userAge) {console.log(['Try: ', nodePath, " ", scriptPath, ' Vasya 18'].join(''))};