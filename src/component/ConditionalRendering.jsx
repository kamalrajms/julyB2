import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      <h1>conditional rendering</h1>
      {user ? <h3>welcome back</h3> : <h3>please login...</h3>}

      <h2>Logical operator</h2>
      {user && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          iure dolorum? Numquam quam eum amet voluptates ut minus? Impedit
          dolores et porro maiores voluptatibus id magni officiis molestias
          laborum eveniet?
        </p>
      )}
    </div>
  );
}
