// Задание 2
// Использование dotenv и axios для получения и вывода данных о погоде
// 1.	Создайте новый проект:
// В терминале перейдите в каталог, где хотите создать проект.
// Запустите команду `npm init -y`, чтобы создать файл `package.json`.
// 2.	Установите dotenv и axios:
// Выполните команду `npm install dotenv axios`.
// 3.	Создайте файл `.env`:
// Создайте файл `.env` в корневом каталоге проекта.
// Добавьте строку `CITY=London`, чтобы задать город для получения данных о погоде.
// 4.	Создайте файл `weather.js`:
// Создайте файл `weather.js` в корневом каталоге проекта.
// 5.	Импортируйте модули `dotenv` и `axios`:
// Откройте файл `weather.js` в текстовом редакторе.
// Импортируйте модули `dotenv` и `axios`.
// 6.	Загрузите переменные окружения из файла `.env`:
// Используйте модуль `dotenv` для загрузки переменных окружения.
// 7.	Настройте GET-запрос к публичному API для получения данных о погоде:
// Настройте GET-запрос к URL `https://wttr.in/${CITY}?format=%t`, где `CITY` - это значение переменной окружения.
// 8.	Выведите результат запроса в консоль:
// Отправьте запрос и выведите температуру для указанного города в консоль.
// 9.	Запустите скрипт командой `node weather.js`.


require('dotenv').config();
const axios = require('axios');
const moment = require('moment');

async function getWeather() {
  try {
    const city = process.env.CITY;

    if (!city) {
      throw new Error('CITY is not defined in .env file');
    }

    const response = await axios.get(
      `https://wttr.in/${city}?format=%t`
    );

    const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');

    console.log(`Date & Time: ${currentTime}`);
    console.log(`Current temperature in ${city}: ${response.data}`);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

getWeather();