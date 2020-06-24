import React, { useState } from "react";

function CounterExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2> Counter Value: {count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default CounterExample;
