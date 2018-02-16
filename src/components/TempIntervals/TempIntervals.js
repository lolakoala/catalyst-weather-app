import React from 'react';

const TempIntervals = () => {
  const intervals = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  return (<div id="temps">
    {intervals.map(num => {
      return <p key={`${Date.now()}${num}`}>{num.toString()}</p>;
    })}
  </div>);
};

export default TempIntervals;
