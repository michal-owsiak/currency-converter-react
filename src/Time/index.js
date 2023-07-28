import "./style.css"

const Time = () => {
  let newDate = new Date();

  return (
    <div className="time">
      Today is {newDate.toLocaleString("en-US", {
        weekday: "long", month: "long", day: "numeric",
      })}, {newDate.toLocaleTimeString()}
    </div>
  );
};

export default Time;