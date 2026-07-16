import React, { useState } from "react";

export default function UseStateHook() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>Derement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
