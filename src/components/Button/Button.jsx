import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ className, text = "Button text" }) => {
  return (
    <button className={`button ${className}`}>
      <div className="button-text">{text}</div>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
