import React, { useState, useEffect } from "react";
import { BsChevronBarUp } from "react-icons/bs";

import "./scrollToTop.scss";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  }, []);
  return (
    <div className={visible ? "scrollTop visible" : "scrollTop"}>
      <a href="#">
        <BsChevronBarUp />
      </a>
    </div>
  );
};

export default ScrollToTop;
