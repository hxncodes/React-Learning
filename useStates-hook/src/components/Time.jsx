import { useState } from "react";

function Time() {
  // update time every 1000 ms (equals to 1 sec)
  setInterval(updateTime, 1000);

  //   get current time in local format
  const now = new Date().toLocaleTimeString();

  //   use of useState hook to show and update time
  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <>
      <h1>{time}</h1>
      <button onClick={updateTime}>Current Time</button>
    </>
  );
}

export default Time;
