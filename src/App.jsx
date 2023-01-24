import "./App.css";
import ClickCounter from "./ClickCounter";
import Counter from "./RPC/Counter";

function App() {
  return (
    <div>
      {/* <ClickCounter /> */}
      <Counter
        render={(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      />
    </div>
  );
}

export default App;
