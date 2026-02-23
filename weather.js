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