import React from "react";

export default function ObjectStyle() {
  const theme = {
    backgroundColor: "red",
    color: "blue",
    padding: "20px",
  };

  return (
    <div style={theme}>
      <h2>Object component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate
        exercitationem reiciendis ullam assumenda, veniam enim optio sed nam
        illo quod inventore doloremque, perferendis vel omnis tempora! Tenetur,
        modi sunt?
      </p>
    </div>
  );
}
