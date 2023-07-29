import "./style.css"
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const clockCaption = (
    <div className="clock__container">
      <div className="clock">
        <span className="clock__date">
          Today is {clock.toLocaleString("en-US", {
            weekday: "long", month: "long", day: "numeric",
          })},
        </span>
        <span className="clock__hour">
          {clock.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );

  return (clockCaption);
};

export default Clock;