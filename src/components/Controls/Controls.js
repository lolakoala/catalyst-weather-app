import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Controls extends Component {
  render() {
    return (<div>
      <input type="text" />
      <button>Change Location</button>
    </div>);
  }
}

export default Controls;

Controls.propTypes = {

};
