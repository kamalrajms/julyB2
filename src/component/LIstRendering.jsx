import React from "react";

export default function LIstRendering() {
  // eg1
  const fruits = ["apple", "banana", "mango", "react"];

  const user = [
    { id: 1, name: "rahul" },
    { id: 2, name: "Ravi" },
    { id: 3, name: "jeeva" },
  ];

  return (
    <div>
      {/* eg1 */}
      <h2>list rengering</h2>
      <h2>fruits list</h2>
      {fruits.map((name, ind) => (
        <p key={ind}>{name}</p>
      ))}

      {/* eg2 */}
      <h2>user data</h2>

      {/* user=[{},{},{}] */}
      {/* person={id:1,name:"rahul"} */}

      {user.length > 0 ? (
        <div>
          {user.map((person) => (
            <h4 key={person.id}>
              {person.id}.{person.name}
            </h4>
          ))}
        </div>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
