import React, { useState } from 'react';

function AppCalcu() {
  const [time1, setTime1] = useState("00:00:00");
  const [time2, setTime2] = useState("00:00:00");

  function handleTime1Change(event) {
    setTime1(event.target.value);
  }

  function handleTime2Change(event) {
    setTime2(event.target.value);
  }

  function calculateTimeDifference() {
    let time1Array = time1.split(":");
    let time2Array = time2.split(":");
    let totalSeconds1 = parseInt(time1Array[0]) * 3600 + parseInt(time1Array[1]) * 60 + parseInt(time1Array[2]);
    let totalSeconds2 = parseInt(time2Array[0]) * 3600 + parseInt(time2Array[1]) * 60 + parseInt(time2Array[2]);
    let difference = Math.abs(totalSeconds1 - totalSeconds2);
    let hoursValue = Math.floor(difference / 3600);
    let minutesValue = Math.floor((difference % 3600) / 60);
    let secondsValue = difference % 60;

    return (
      (hoursValue < 10 ? "0" + hoursValue : hoursValue) + ":" +
      (minutesValue < 10 ? "0" + minutesValue : minutesValue) + ":" +
      (secondsValue < 10 ? "0" + secondsValue : secondsValue)
    );
  }

  return (
    <div>
      <h1>Time Calculator</h1>
      <label>
        Time 1:
        <input type="text" value={time1} onChange={handleTime1Change} />
      </label>
      <br />
      <label>
        Time 2:
        <input type="text" value={time2} onChange={handleTime2Change} />
      </label>
      <br />
      <p>Time difference: {calculateTimeDifference()}</p>
    </div>
  );
}

export default AppCalcu;
