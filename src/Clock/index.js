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

  return (
    <div className="clock">
        Today is {clock.toLocaleString("en-US", {
          weekday: "long", month: "long", day: "numeric",
        })}, {clock.toLocaleTimeString()}
      </div>
  );
};

export default Clock;