import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  render() {
    return (<div>
      <input type="text"
        value={this.state.input}
        onChange={(event) => this.setState({ input: event.target.value })}/>
      <button>Change Location</button>
    </div>);
  }
}

export default Controls;

Controls.propTypes = {

};
