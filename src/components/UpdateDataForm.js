import React, { useState } from "react";

function UpdateDataForm({ item, onUpdateData, onClose }) {
  const [updatedData, setUpdatedData] = useState({
    name: item.name,
    email: item.email,
    phone: item.phone,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://6728fadd6d5fa4901b6bbadc.mockapi.io/users/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      if (response.ok) {
        alert("데이터가 수정되었습니다.");
        onUpdateData();  // Refresh data after updating
        onClose();  // Close the modal
      } else {
        alert("수정 실패");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID: <input type="text" name="id" value={item.id} readOnly />
      </label><br />
      <label>
        이름:
        <input
          type="text"
          name="name"
          value={updatedData.name}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={updatedData.email}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={updatedData.phone}
          onChange={handleChange}
        />
      </label><br />
      <button type="submit">수정</button>
    </form>
  );
}

export default UpdateDataForm;
