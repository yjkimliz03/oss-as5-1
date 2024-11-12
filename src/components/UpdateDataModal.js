import React from "react";
import UpdateDataForm from "./UpdateDataForm";

function UpdateDataModal({ item, onClose, onUpdateData }) {
  const handleUpdateData = (updatedData) => {
    onUpdateData(updatedData); // 데이터 업데이트
    onClose(); // 데이터 수정 후 모달 닫기
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>데이터 수정</h3>
        <UpdateDataForm item={item} onUpdateData={handleUpdateData} />
      </div>
    </div>
  );
}

export default UpdateDataModal;
