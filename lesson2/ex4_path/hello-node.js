// console.log(process.argv);
const args = process.argv;
const userName = args[2];
const userAge = args[3];

// console.log('User =', userName);

////////////////////////////////////////
// if(!userAge) {
//     console.log('Try: ',args[0] + " " + args[1] + ' Vasya 18');
// }

// можно через Массив
// if(!userAge) {console.log(['Try: ', args[0], " ", args[1], ' Vasya 18'].join(''))};

// оптимизация
const path = require('path');
const nodePath = args[0].split(path.sep).pop();
const scriptPath = path.basename(args[1]) //args[1].split(path.sep).pop();
// const scriptPath = path.dirname(args[1])
if(!userAge) {console.log(['Try: ', nodePath, " ", scriptPath, ' Vasya 18'].join(''))};
//////////////////////////////////////


// Останавливает код с определённым результатом (0 Успешно, 1 Не успешно)
// process.exit(3)

// if(userName) {
//     console.log(`Hello, ${userName}! ${userAge}`);
// } else { console.log('Hello NodeJS!');}


// const pathRromEnv = process.env.PATH;
// console.log('PATH=', pathRromEnv);



