// const fs = require('fs');

// разные варианты написания
// 1
// fs.readFile('./text.txt', (error, data) => {
//     console.log(data.toString());
// })
// 2
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     console.log(data);
// })

// Создание нового файла и передачи информации из первого txt
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     fs.writeFile('./test2.txt', data, () => {

//     })
// })
// Создание нового файла и передачи информации с первого + добавление новой информации txt
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     fs.writeFile('./test2.txt', `${data} trololo`, () => {
        
//     })
// })

// Создание файла в новой папке files и чтение ошибки Почему не получилось
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     fs.writeFile('./files/test2.txt', `${data} trololo`, (error) => {
//         error ? console.log(error) : null;
//     })
// })

// Создание папки files и создание файла в ней
// fs.readFile('./text.txt', 'utf8', (error, data) => {
//     fs.mkdirSync('./files', () => {
//         fs.writeFileSync('./files/test2.txt', `${data} trololo`, (error) => {
//             error ? console.log(error) : null;
//         })
//     })
//     })

//удаление файла, Проверка на наличие его    setTimeout для наглядности
// setTimeout(() => {
//     if(fs.existsSync('./files/test.txt')) {
//         fs.rmdir('./files', () => {});
//     }
// }, 4000)

//удаление Директории, Проверка на наличие его    setTimeout для наглядности
// setTimeout(() => {
//     if(fs.existsSync('./files')) {
//         fs.rmdir('./files', () => {});
//     }
// }, 6000)





