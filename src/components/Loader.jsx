// src/components/Loader.jsx
import React from "react";
import './loader.css'; // optional, for custom styles

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
