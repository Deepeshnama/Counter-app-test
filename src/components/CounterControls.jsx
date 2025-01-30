import React from "react";

const CounterControls = ({ increment, decrement, reset }) => {
  return (
    <div className="controls">
      <button className="btn" onClick={increment}>
        +
      </button>
      <button className="btn" onClick={decrement}>
        -
      </button>
      <button className="btn reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default CounterControls;
