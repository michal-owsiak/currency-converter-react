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

  const clockDisplay = (
    <div className="clock">
      <span>
        Today is {clock.toLocaleString("en-US", {
          weekday: "long", month: "long", day: "numeric",
        })}
      </span>
      <span>
        {clock.toLocaleTimeString()}
      </span>
    </div>
  );

  return (clockDisplay);
};

export default Clock;