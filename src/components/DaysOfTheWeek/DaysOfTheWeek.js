import React from 'react';
import PropTypes from 'prop-types';

const DaysOfTheWeek = ({ currentDay }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const startIndex = days.indexOf(currentDay);
  const currentFiveDays = days.slice(startIndex, startIndex + 5);

  return (<div id="days">
    {currentFiveDays.map(day => {
      return <p key={`${Date.now()}${day}`}>{day}</p>;
    })}
  </div>);
};

export default DaysOfTheWeek;

DaysOfTheWeek.propTypes = {
  currentDay: PropTypes.string
};
