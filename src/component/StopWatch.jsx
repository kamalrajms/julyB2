import React, { useState, useEffect } from "react";

export default function StopWatch() {
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec((perv) => perv + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [running]);
  //   console.log(running);

  return (
    <div>
      <h1>stop watch:{sec}</h1>
      <button onClick={() => setRunning(true)}>start</button>
      <button onClick={() => setRunning(false)}>stop</button>
      <button onClick={() => setSec(0)}>reset</button>
    </div>
  );
}
