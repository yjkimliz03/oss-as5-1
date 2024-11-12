import React from "react";
import AddDataForm from "./AddDataForm";

function AddDataModal({ onClose, onAddData }) {
  const handleAddData = (newData) => {
    onAddData(newData);
    onClose();  // 데이터 추가 후 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>데이터 추가</h3>
        <AddDataForm onAddData={handleAddData} />
      </div>
    </div>
  );
}

export default AddDataModal;
