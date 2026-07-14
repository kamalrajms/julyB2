import React from "react";
import Hello from "./Hello";

export default function Greeting(props) {
  return (
    <div>
      <h2>react intro session----{props.first}---{props.age}</h2>
      <Hello />
    </div>
  );
}
