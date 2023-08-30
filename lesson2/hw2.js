// 1. Доработать программу для решения +
//    (добавить диалог с пользователем и добавить вывод результата в Файл журнала)

const readline = require("node:readline");
const path = require("path");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const resultFilePath = path.join(path.dirname(process.argv[1]), "result.txt");
console.log(resultFilePath);

let a;
let b;
let result;

fs.unlinkSync(resultFilePath);

const writeFile = (a, b) => {
  result = a + b;
  const opts = { flag: "a" };
  fs.writeFileSync(resultFilePath, result.toString(), opts);
};

rl.question("Enter A ", (answer) => {
  a = +answer;
  rl.question("Enter B ", (answer) => {
    b = +answer;
    writeFile(a, b);
    rl.close();
  });
});

rl.on("close", () => {
  console.log(a + b);
});



// 2.  Дан входной файл с ФИО на кириллице. Необходимо его с читать, 
//     перевести стройки в транслит и записать В файл результат. Функция транслита любая