import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls/Controls.js';
import getWeather from './helper.js';

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
    console.log(navigator);
    // set state with current Location
    // api call for current weather
  }

  setLocation = currentLocation => {
    this.setState({ currentLocation });
    this.setWeather(currentLocation);
  }


  render() {
    return (
      <div className="App">
        <p>`Your current location is ${this.state.currentLocation}.`</p>
        <Controls setLocation={this.setLocation}/>
      </div>
    );
  }
}

export default App;
