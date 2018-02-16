import key from './secretKey.js';

const getWeather = location => {
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${key}`)
    .then(res => {
      if (res.status !== 200) {
        return 'Location not found. Please be sure to enter a valid city name or zipcode.';
      } else {
        return res.json();
      }
    })
    .then(res => res.list);
};

export default getWeather;
