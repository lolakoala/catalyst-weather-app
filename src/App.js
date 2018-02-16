import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls/Controls.js';
import Graph from './components/Graph/Graph.js';
import { getWeather, getWeatherWithCoord } from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: '',
      weather: {}
    };
    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  setWeather = location => {
    getWeather(location)
      .then(res => this.setState({ weather: Object.assign({}, this.state.weather, { [location]: res }) }))
      .catch(error => { throw error; });
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
          .catch(error => { throw error; });
      });
    } else {
      this.setState({ currentLocation: 'not currently accessible' });
    }
  }

  setLocation = currentLocation => {
    this.setState({ currentLocation });

    const allSearchedLocations = this.state.weather.map(cityAndWeather => {
      return Object.keys(cityAndWeather).toString();
    });

    if (!allSearchedLocations.includes(currentLocation)) {
      this.setWeather(currentLocation);
    }
  }

  render() {
    const { currentLocation, weather } = this.state;
    if (!currentLocation.length) {
      return (<p>Please wait while Simple Weather loads your current weather.</p>);
    } else {
      return (
        <div className="App">
          <p>Welcome to Simple Weather.</p>
          <p>Your current location is {currentLocation}.</p>
          <Controls setLocation={this.setLocation}/>
          <Graph weather={weather[currentLocation]}/>
        </div>
      );
    }
  }
}

export default App;
