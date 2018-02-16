import React from 'react';
import PropTypes from 'prop-types';

const DaysOfTheWeek = ({ currentDay }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const startIndex = days.indexOf(currentDay);
  const currentFiveDays = days.slice(startIndex, startIndex + 5);

  return (<div>
    {currentFiveDays.map(day => {
      return <p key={`${Date.now()}${day}`}>{day}</p>;
    })}
    {/* <p>{days[startIndex]}</p>
    <p>{days[startIndex + 1]}</p>
    <p>{days[startIndex + 2]}</p>
    <p>{days[startIndex + 3]}</p>
    <p>{days[startIndex + 4]}</p> */}
  </div>);
};

export default DaysOfTheWeek;

DaysOfTheWeek.propTypes = {
  currentDay: PropTypes.string
};
