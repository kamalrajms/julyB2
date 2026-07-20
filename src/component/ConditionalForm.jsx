import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChange2 = (e) => {
  //     const { checked, name } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("helllllllooooo");
    if (!formData.userName || !formData.email || !formData.password) {
      setError("all the fields are required");
      return;
    }
    if (!formData.terms) {
      setError("must accept the checkbox");
      return;
    }
    setError("");
    alert("form submitted successfully");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>conditional form</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <input
          type="text"
          value={formData.userName}
          name="userName"
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="enter a email"
        />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="enter a password"
        />
        <input
          type="checkbox"
          checked={formData.terms}
          name="terms"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
