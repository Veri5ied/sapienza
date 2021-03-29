import React, { useState } from "react";

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return <button className={`${size} ${variant}`}>{props.children}</button>;
}

export default Button;
