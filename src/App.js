import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls/Controls.js';
import { getWeather, getWeatherWithCoord } from './helper.js';
import { initChart } from './d3helper.js';
import DaysOfTheWeek from './components/DaysOfTheWeek/DaysOfTheWeek.js';
import TempIntervals from './components/TempIntervals/TempIntervals.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: '',
      weather: {},
      error: ''
    };
    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  setWeather = location => {
    getWeather(location)
      .then(res => this.setState({ weather: Object.assign({}, this.state.weather, { [location]: res }) }))
      .then(() => initChart(this.state.weather[this.state.currentLocation]))
      .catch(error => this.setState({ error: 'Location could not be found. Please enter a valid city name or zipcode.' }));
  }

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        getWeatherWithCoord(position)
          .then(res => {
            this.setState({
              currentLocation: res.city.name,
              weather: Object.assign({}, this.state.weather, { [res.city.name]: res.list })
            });
          })
          .then(() => initChart(this.state.weather[this.state.currentLocation]))
          .catch(error => { throw error; });
      });
    } else {
      this.setState({ currentLocation: 'not currently accessible' });
    }
  }

  setLocation = currentLocation => {
    if (!currentLocation.length) {
      this.setState({ currentLocation: 'not currently accessible', error: 'Please enter a valid city name or zipcode.' });
    }

    this.setState({ currentLocation });

    const allSearchedLocations = this.state.weather.map(cityAndWeather => {
      return Object.keys(cityAndWeather).toString();
    });

    if (!allSearchedLocations.includes(currentLocation)) {
      this.setWeather(currentLocation);
    }
  }

  getDay = () => {
    const days = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    };
    const date = new Date();
    return days[date.getDay()];
  }

  render() {
    const { currentLocation, error } = this.state;
    if (!currentLocation.length) {
      return (<p id="loading">Please wait while Simple Weather loads your current weather.</p>);
    } else {
      return (
        <div className="App">
          <p id="title">Welcome to Simple Weather.</p>
          <p id="location">Your current location is {currentLocation}.</p>
          <Controls setLocation={this.setLocation}/>
          {error.length ? <p>{error}</p> : null}
          <DaysOfTheWeek currentDay={this.getDay()} />
          <div>
            <TempIntervals />
            <div id="graph"></div>
          </div>
        </div>
      );
    }
  }
}

export default App;
