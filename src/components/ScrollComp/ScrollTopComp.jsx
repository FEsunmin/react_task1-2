import React, { useState, useEffect, useRef } from "react";
import "./ScrollTopComp.css";

function ScrollTopComp() {
  const [isAtTop, setAtTop] = useState(true);
  const scrollBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="scrollBtn"
      onClick={isAtTop ? scrollToBottom : scrollToTop}
      ref={scrollBtnRef}
    >
      <i className="scroll">{isAtTop ? "▼" : "▲"}</i>
    </button>
  );
}

export default ScrollTopComp;
