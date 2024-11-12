import React, { useState } from "react";
import DataList from "../DataList";
import AddDataModal from "../AddDataModal";
import UpdateDataModal from "../UpdateDataModal";

const baseURL = "https://6728fadd6d5fa4901b6bbadc.mockapi.io/users";

function App() {
  const [data, setData] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(baseURL);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Handle Add Modal open
  const openAddModal = () => setIsAddModalOpen(true);

  // Handle Update Modal open
  const openUpdateModal = (item) => {
    setEditItem(item);
    setIsUpdateModalOpen(true);
  };

  // Close modals
  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsUpdateModalOpen(false);
    setEditItem(null);
  };

  // Handle delete operation
  const handleDeleteData = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`, { method: "DELETE" });
      if (response.ok) {
        alert("데이터가 삭제되었습니다.");
        fetchData(); // Refresh the data list
      } else {
        alert("삭제 실패");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="App">
      <h1>REACT CRUD 페이지 구현 (22200150 김유진)</h1>
      <button onClick={fetchData}>데이터 조회</button>
      <button onClick={openAddModal}>데이터 추가</button>

      {/* Data List */}
      <DataList
        data={data}
        onUpdate={openUpdateModal}
        onDelete={handleDeleteData}  // Pass delete handler
      />

      {/* Add Data Modal */}
      {isAddModalOpen && (
        <AddDataModal onClose={closeModal} onAddData={fetchData} />
      )}

      {/* Update Data Modal */}
      {isUpdateModalOpen && editItem && (
        <UpdateDataModal
          item={editItem}
          onClose={closeModal}
          onUpdateData={fetchData}
        />
      )}
    </div>
  );
}

export default App;
