import React from "react";
import { MainPage } from "../../components/MainPage";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="main-page-wrapper">
        <MainPage className="main-page-instance" overlapClassName="design-component-instance-node" />
      </div>
    </div>
  );
};
