import React, { useState } from "react";

function Input(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(inputValue);
    }
  };
  return <input type={inputType} value={inputValue} onChange={handleChange} />;
}

export default Input;
