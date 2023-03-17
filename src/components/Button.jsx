import React from "react";

const Button = ({ buttonSet, label, ...props }) => {
  return (
    <button
      className={`flex justify-center items-center tracking-wider bg-sky text-white border-white hover:border-white shadow-md shadow-gray-600 duration-300 active:scale-90 ${buttonSet}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
