import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {
  const clock = useCurrentDate();
  
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