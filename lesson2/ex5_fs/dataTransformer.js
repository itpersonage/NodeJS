const readline = require("readline");
const path = require('path');
const fs = require('fs');

const resultFilePath = path.join(path.dirname(process.argv[1]), 'transformered_data.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fs.unlinkSync(resultFilePath)

const callbackReadOneString = (string) => {
    const transformedString = string + ' -- ' + string + '\n';
    const opts = {flag: 'a'};
    fs.writeFileSync(resultFilePath, transformedString, opts);
  // console.log("Read string:", transformedData);
}

rl.on("line", callbackReadOneString);
rl.on('close', () => {
  console.log(resultFilePath);
})
    