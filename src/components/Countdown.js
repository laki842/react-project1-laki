import React, { useState } from 'react';
import './Countdown.css';

function Countdown() {
  // time till launch with their default value of 0

  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  // interval will determine how often will values be updated

  let interval;
  interval = setInterval(() => {
    // launch date
    const launchDate = new Date('August 10, 2024 ').getTime();

    // current date
    const currentDate = new Date().getTime();

    // time till launch
    let timeLeft = launchDate - currentDate;

    // leftovers
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // setting time till launch with new values
    setDays(daysLeft);
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
  }, 1000);

  return (
    <div className='countdown-container1'>
      <h1>Time till first Mars mission</h1>
      <div className='countdown-wrapper'>
        <div className='years'>
          <h1>{days}</h1>
          <p>days</p>
        </div>
        <div className='months'>
          <h1>{hours}</h1>
          <p>hours</p>
        </div>
        <div className='days'>
          <h1>{minutes}</h1>
          <p>minutes</p>
        </div>
        <div className='seconds'>
          <h1>{seconds}</h1>
          <p>seconds</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
