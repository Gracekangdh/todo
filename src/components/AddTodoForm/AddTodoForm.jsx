import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: "고유한 아이디", text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
