// Задание 5

// Копирование файла с использованием потоков
// 1.	Создайте новый файл для скрипта, например, `streamTask3.js`.
// 2.	Импортируйте модуль `fs`.
// 3.	Создайте или найдите файл, который хотите скопировать, например, `sourceFile.jpg`, и поместите его в ту же директорию, что и скрипт.
// 4.	Используйте метод `fs.createReadStream` для создания потока чтения из файла `sourceFile.jpg`.
// 5.	Используйте метод `fs.createWriteStream` для создания потока записи в новый файл, например, `destinationFile.jpg`.
// 6.	Используйте метод `pipe` для соединения потока чтения с потоком записи, чтобы данные автоматически передавались от одного к другому.
// 7.	Подпишитесь на события потока записи:
// `finish`: чтобы определить, когда копирование данных завершено.
// `error`: чтобы обрабатывать возможные ошибки.
// 8.	После завершения копирования файла выведите сообщение о завершении операции.



const fs = require("fs");

// создаём поток чтения
const readStream = fs.createReadStream("sourceFile.jpg");

// создаём поток записи
const writeStream = fs.createWriteStream("destinationFile.jpg");

// соединяем потоки (копирование)
readStream.pipe(writeStream);

// когда копирование завершено
writeStream.on("finish", () => {
  console.log("File copied successfully.");
});

// обработка ошибок
writeStream.on("error", (err) => {
  console.error("Error during copying:", err.message);
});

readStream.on("error", (err) => {
  console.error("Error reading file:", err.message);
});