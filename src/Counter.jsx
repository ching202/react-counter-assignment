import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementAfterDelay = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  const handleIncrementTwice = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  const handleCorrectIncrementTwice = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter-container">
      <h1>React Counter Assignment</h1>
      <h2>Count: {count}</h2>

      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAfterDelay}>Increment After Delay</button>
        <button onClick={handleIncrementTwice}>Increment Twice</button>
        <button onClick={handleCorrectIncrementTwice}>
          Correct Increment Twice
        </button>
      </div>

      <div className="explanation-box">
        <p>
          <strong>Increment Twice</strong> may only add 1 because React batches
          updates and uses the same state snapshot.
        </p>
        <p>
          <strong>Correct Increment Twice</strong> adds 2 because it uses the
          previous state value.
        </p>
      </div>
    </div>
  );
}

export default Counter;