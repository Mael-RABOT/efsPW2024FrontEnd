import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Section = ({ className, text = "Section Title", text1 = "Section Content" }) => {
  return (
    <div className={`section ${className}`}>
      <div className="overlap-group">
        <div className="banner" />
        <div className="section-title">{text}</div>
      </div>
      <div className="section-content">{text1}</div>
    </div>
  );
};

Section.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
