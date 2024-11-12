import React, { useState } from "react";

function AddDataForm({ onAddData, onClose }) {
  const [newData, setNewData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://6728fadd6d5fa4901b6bbadc.mockapi.io/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });
      if (response.ok) {
        alert("데이터가 추가되었습니다.");
        onAddData();  // Refresh data after adding
        onClose();  // Close the modal
      } else {
        alert("추가 실패");
      }
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="text"
          name="id"
          value={newData.id}
          onChange={handleChange}
        />
      </label><br />
      <label>
        이름:
        <input
          type="text"
          name="name"
          value={newData.name}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newData.email}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={newData.phone}
          onChange={handleChange}
        />
      </label><br />
      <button type="submit">추가</button>
    </form>
  );
}

export default AddDataForm;