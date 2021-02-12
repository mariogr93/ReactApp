import React from "react";

import "./Input.css";

const Input = (props) => {
  const { id, onInput } = props;

  return (
    <div className={`form-control ${"form-control--invalid"}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
