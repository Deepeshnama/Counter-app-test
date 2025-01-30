import React, { useState, useEffect } from "react";
import "./index.css";
import Counter from "./components/Counter";
import CounterControls from "./components/CounterControls";
import AutoIncrement from "./components/AutoIncrement";

function App() {
  
  const [count, setCount] = useState(0);
  
  const [autoIncrement, setAutoIncrement] = useState(false);

  useEffect(() => {
    let interval;

    if (autoIncrement) {
      interval = setInterval(() => {
        setCount((prevCount) => (prevCount < 98 ? prevCount + 1 : prevCount));
      }, 1100);
    }

    return () => clearInterval(interval);
  }, [autoIncrement]);

  const increment = () => {
    if (count < 98) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const toggleAutoIncrement = () => {
    setAutoIncrement(!autoIncrement);
  };

  return (
    <div className="app">
      <h1>Counter App</h1>

      <Counter count={count} />

      <CounterControls
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      
      <AutoIncrement isEnabled={autoIncrement} toggle={toggleAutoIncrement} />
    </div>
  );
}

export default App;
