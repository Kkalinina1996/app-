// Задание 4
// Запись данных в файл с использованием потоков
// 1.	Создайте новый файл для скрипта, например, `streamTask2.js`.
// 2.	Импортируйте модуль `fs`.
// 3.	Определите данные, которые хотите записать в файл. Например, создайте строку с большим количеством текста или генерируйте данные в цикле.
// 4.	Используйте метод `fs.createWriteStream` для создания потока записи в новый файл, например, `output.txt`.
// 5.	Используйте метод `write` потока записи для записи данных в файл.
// 6.	Подпишитесь на события потока:
// `finish`: чтобы определить, когда запись данных завершена.
// `error`: чтобы обрабатывать возможные ошибки.
// 7.	После завершения записи данных закройте поток и выведите сообщение о завершении.

  
  
  const fs = require("fs");


const writeStream = fs.createWriteStream("output.txt");


for (let i = 1; i <= 1000; i++) {
  writeStream.write(`This is line number ${i}\n`);
}

writeStream.end();


writeStream.on("finish", () => {
  console.log("Writing completed successfully.");
});


writeStream.on("error", (err) => {
  console.error("An error occurred:", err.message);
});