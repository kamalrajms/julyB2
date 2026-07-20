import React, { useState } from "react";

export default function Field() {
  const [name, setName] = useState("");
  const [check, setCheck] = useState(true);
  console.log(check);

  return (
    <div>
      <h2>Controlled text input</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>name:{name}</h2>

      <h2>Checkbox</h2>
      <label htmlFor="">Check box</label>
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => setCheck(e.target.checked)}
      />

      {/* <select name="" id="">
            <option value="apple">apple</option>
            <option value="React">orange</option>
        </select> */}
    </div>
  );
}
