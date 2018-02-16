import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls/Controls.js';
import { getWeather, getWeatherWithCoord } from './helper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: '',
      weather: []
    };
    this.setLocation = this.setLocation.bind(this);
    this.setWeather = this.setWeather.bind(this);
  }

  setWeather = location => {
    getWeather(location)
      .then(res => this.setState({ weather: [...this.state.weather, { [location]: res }] }))
      .catch(error => { throw error; });
  }

  componentDidMount = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        getWeatherWithCoord(position)
        // .then(res => console.log(res.city))
          .then(res => {
            this.setState({
              currentLocation: res.city.name,
              weather: [...this.state.weather, { [res.city]: res.list }]
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
    this.setWeather(currentLocation);
  }


  render() {
    // handle waiting on info to come back
    return (
      <div className="App">
        <p>`Your current location is {this.state.currentLocation}.`</p>
        <Controls setLocation={this.setLocation}/>
      </div>
    );
  }
}

export default App;
