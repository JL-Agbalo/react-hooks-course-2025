import React, { useState } from "react";

export const DynamicInputTracker = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Dynamic Input Tracker</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter text"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "18px", color: "#555" }}>
        {input || "Start typing..."}
      </p>
    </div>
  );
};
