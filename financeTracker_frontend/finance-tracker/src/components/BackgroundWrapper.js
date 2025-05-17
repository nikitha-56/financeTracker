// BackgroundWrapper.js
import React from "react";
import "./BackgroundWrapper.css";

const BackgroundWrapper = ({ children }) => {
  return <div className="background-wrapper">{children}</div>;
};

export default BackgroundWrapper;
