import { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    setCount((count) => count + 1);
  };
  render() {
    // return this.props.render(this.state.count, this.incrementCount);
  }
}

export default Counter;
