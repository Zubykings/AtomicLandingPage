import React from "react";

const Button = ({ text, bgColor, textColor, radius }) => {
  return (
    <div>
      <button className={`${bgColor} ${textColor} py-1 px-4 ${radius} shadow`}>{text} </button>
    </div>
  );
};

export default Button;
