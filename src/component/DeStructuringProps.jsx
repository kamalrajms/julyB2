import React from "react";

export default function DeStructuringProps({ name, age, city }) {
  return (
    <div>
      <h3>name:{name}</h3>
      <h3>age:{age}</h3>
      <h3>city:{city}</h3>
    </div>
  );
}
