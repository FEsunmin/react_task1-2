import React, { useState } from "react";
import "./FormComp.css";

const FormComp = ({ addList }) => {
  const [title, setTitle] = useState("");
  const [cont, setCont] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addList({ title, cont });
    setTitle("");
    setCont("");
  };

  return (
    <div className="inputBar">
      <form onSubmit={handleSubmit} className="formFlex">
        <div className="inputBox">
          <div className="inputFlex1">
            <h4 className="inputTitle">제목</h4>
            <input
              className="input-title"
              type="text"
              placeholder="제목을 입력하세요..."
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="inputFlex2">
            <h4 className="inputCont">내용</h4>
            <input
              className="input-content"
              type="text"
              placeholder="내용을 입력하세요..."
              value={cont}
              onChange={(e) => {
                setCont(e.target.value);
              }}
            />
          </div>
        </div>
        <button className="addBtn">추가하기</button>
      </form>
    </div>
  );
};

export default FormComp;
