import React, { useState, useEffect } from "react";
import { StyledClock } from "./styled";

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
    <StyledClock>
      <span>
        Today is {clock.toLocaleString("en-US", {
          weekday: "long", month: "long", day: "numeric",
        })}
      </span>
      <span>
        {clock.toLocaleTimeString()}
      </span>
    </StyledClock>
  );

  return (clockDisplay);
};

export default Clock;