import React, { useState } from "react";

export default function RegFrom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, //previous value
      [name]: value, // updated data

      //   [e.target.name]: e.target.value, // updated data
    });
  };
  console.log(formData);

  return (
    <div>
      <h2>Multi fields</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter a name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="enter a email"
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="enter a age"
      />
    </div>
  );
}
