import css from "./LoadMoreBtn.module.css";
import React from "react";

type Prop = {
  children: React.ReactElement;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const LoadMoreBtn = ({ children, onClick, type = "button" }: Prop) => {
  return (
    <button type={type} onClick={onClick} className={css.button}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
