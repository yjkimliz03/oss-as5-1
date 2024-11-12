import React from "react";

function DataList({ data, onUpdate, onDelete }) {
  return (
    <div id="dataList">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="data-item">
            <div className="data-field">ID: {item.id}</div>
            <div className="data-field">이름: {item.name}</div>
            <div className="data-field">Email: {item.email}</div>
            <div className="data-field">Phone: {item.phone}</div>
            <div className="button-group">
              <button onClick={() => onUpdate(item)}>수정</button>
              <button onClick={() => onDelete(item.id)}>삭제</button>
            </div>
          </div>
        ))
      ) : (
        <p>데이터가 없습니다. '데이터 조회' 버튼을 눌러주세요.</p>
      )}
    </div>
  );
}

export default DataList;
