import React from "react";
import "./style.css";

export const Page = ({ className }) => {
  return (
    <div className={`page ${className}`}>
      <div className="app-rectangle" />
    </div>
  );
};
