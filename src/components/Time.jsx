import React, { useEffect, useState } from "react";

const Time = ({ onTimeUpdate }) => {
  const [seconds, setSeconds] = useState(60);
  const [startTime, setStartTime] = useState(60);
  useEffect(() => {
    const countdown = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    const time = `00:${seconds < 10 ? "0" : ""}${seconds}`;
    const completedTime = `00:${
      startTime - seconds < 10
        ? `0${startTime - seconds}`
        : `${startTime - seconds}`
    }`;
    onTimeUpdate(time, completedTime);
  }, [seconds, onTimeUpdate]);

  return <div>{`00:${seconds < 10 ? "0" : ""}${seconds}`}</div>;
};

export default Time;
