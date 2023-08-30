// 2.  Дан входной файл с ФИО на кириллице. Необходимо его с читать,
//     перевести стройки в транслит и записать В файл результат. Функция транслита любая

const { log } = require("console");
const fs = require("fs");
const path = require('path');

const resultFilePath = path.join(path.dirname(process.argv[1]), "result.txt");
fs.unlinkSync(resultFilePath);

fs.readFile("./dataHW.txt", (error, data) => {
    changeName(data.toString());
  });

const changeName = (data) => {
  let result = "";
  const converter = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };
  for (let i = 1; i < data.length; i++) {
    if (converter[data[i]] === undefined) {
      result += data[i];
    } else {
      result += converter[data[i]];
    }
  }
  const opts = { flag: "a" };
  fs.writeFileSync(resultFilePath, result, opts)
};
