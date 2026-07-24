import React, { useState, useEffect } from "react";

export default function UseefectAPI() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch,axios
    fetch("https://jsonplaceholder.typicode.com/users")
      // array=[{1},{2},{3},{4}..{10}]     //raw data
      .then((res) => res.json())
      // array=[{1},{2},{3},{4}..{10}]     //key-value data
      .then((data) => {
        setUser(data);
      });
  }, []);

  console.log(user);

  return (
    <div>
      <h2>user list</h2>
      {/* user=[{name:"rff"},{},{}...{}] */}
      {user.map((person) => (
        <h3 key={person.id}>
          {person.id}.{person.name}----{person.email}
        </h3>
      ))}
    </div>
  );
}
