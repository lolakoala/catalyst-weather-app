import key from '../secretKey.js';

const getWeather = location => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}`)
  // handle status other than 200
    .then(res => res.json())
    .catch(error => { throw error; });
};

export default getWeather;
