import key from './secretKey.js';

export const getWeather = location => {
  let type;
  if (parseInt(location)) {
    type = 'zip';
  } else {
    type = 'q';
  }

  return fetch(`http://api.openweathermap.org/data/2.5/forecast?${type}=${location}&APPID=${key}`)
    .then(res => {
      if (res.status !== 200) {
        return 'Location not found. Please be sure to enter a valid city name or zipcode.';
      } else {
        return res.json();
      }
    })
    .then(res => res.list);
};

export const getWeatherWithCoord = locationObject => {
  const lat = locationObject.coords.latitude;
  const lon = locationObject.coords.longitude;
  return fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${key}`)
    .then(res => {
      if (res.status !== 200) {
        return 'Your location is not currently accessible. Please enter a valid city name or zipcode to access a weather forecast.';
      } else {
        return res.json();
      }
    });
};
