import React from "react";

const CustomInput = ({label, labelSet, inputSet, ...props}) => {
  return (
    <>
      <label className={`${labelSet}`}>{label}</label>
      <input
        className={`input input-bordered w-full bg-white ${inputSet}`}{...props}
      />
    </>
  );
};

export default CustomInput;
