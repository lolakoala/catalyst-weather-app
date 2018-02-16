import React, { Component } from 'react';
import './App.css';
import Controls from './components/Controls/Controls.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentLocation: ''
    };
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation = currentLocation => {
    this.setState({ currentLocation });
  }


  render() {
    return (
      <div className="App">
        <Controls setLocation={this.setLocation}/>
      </div>
    );
  }
}

export default App;
