import React from "react";

const AutoIncrement = ({ isEnabled, toggle }) => {
  return (
    <div className="toggle-container">
      <button
        className={`btn ${isEnabled ? "enabled" : "disabled"}`}
        onClick={toggle}
      >
        {isEnabled ? "Disable" : "Enable"} Auto Increment
      </button>
    </div>
  );
};

export default AutoIncrement;
