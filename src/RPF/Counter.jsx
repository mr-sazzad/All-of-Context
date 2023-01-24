import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  return props.render(count, incrementCount);
};

export default Counter;
