import React, { useState } from "react";

export default function DarkMode() {
  const [dark, setDark] = useState(false);
  console.log(dark);

  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        switch to {dark ? "light" : "dark"} mode
      </button>
      <h2>you are in {dark ? "dark" : "light"} mode</h2>
    </div>
  );
}

// !true===false
// !false=== true
