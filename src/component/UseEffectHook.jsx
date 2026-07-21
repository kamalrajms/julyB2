import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(5);

  useEffect(() => {
    console.log("component mounted");
  }, [num]);

  useEffect(() => {
    console.log(`count change to : ${count}--${num}`);
  }, [count, num]);
  return (
    <div>
      <h2>useEffect hook</h2>
      <h2>
        Count:{count},num:{num}
      </h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setNum(num - 1)}>decrement</button>
    </div>
  );
}
