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
    return (<div id="controls">
      <input type="text"
        value={this.state.input}
        onChange={(event) => this.setState({ input: event.target.value })}/>
      <button onClick={() => this.props.setLocation(this.state.input)}>Change Location</button>
    </div>);
  }
}

export default Controls;

Controls.propTypes = {
  setLocation: PropTypes.func
};
