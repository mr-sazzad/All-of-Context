import React from "react";
import withCounter from "./HOC/withCounter";
const ClickCounter = ({ count, incrementCount }) => {
  //   const [count, setCount] = useState(0);
  //   const incrementCount = () => {
  //     setCount((count) => count + 1);
  //   };
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  );
};

export default withCounter(ClickCounter);
