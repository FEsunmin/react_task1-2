import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./CardComp.css";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const CardComp = ({
  id,
  title,
  content,
  toggleDone,
  toggleCancle,
  onRemove,
  state,
}) => {
  const handleClick = () => {
    if (state === "완료") {
      toggleDone(id);
    } else if (state === "취소") {
      toggleCancle(id);
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <div className="cardLayout">
        <div className="cardInfo">
          <h2 className="cardTitle">{title}</h2>
          <div className="sectionLine"></div>
          <h3 className="cardCont">{content}</h3>
        </div>

        <div className="cardBtns">
          <button className="cardDelete" onClick={() => onRemove(id)}>
            삭제하기
          </button>
          <button className="cardBtn" onClick={handleClick}>
            {state}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardComp;
