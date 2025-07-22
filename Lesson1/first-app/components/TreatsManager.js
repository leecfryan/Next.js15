// components/TreatsManager.js
"use client";

import { useState } from "react";

export default function TreatsManager() {
  const [treats, setTreats] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", stock: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) return;
    setTreats([...treats, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", stock: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Treat Name"
          value={form.name}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          name="stock"
          placeholder="Stock"
          type="number"
          value={form.stock}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Add Treat</button>
      </form>

      <ul>
        {treats.map((treat) => (
          <li key={treat.id}>
            <strong>{treat.name}</strong> - ${treat.price} ({treat.stock} in
            stock)
          </li>
        ))}
      </ul>
    </div>
  );
}
