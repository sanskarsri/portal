
import React from "react";

// buttonProps = {
//   color: string,
//   disabled?: boolean,
//   type?: string,
//   onClick?: Function,
//   children: Node
// };

const Button = (props) => {
  const buttonStyle = `Button Button--${props.color} `;
  return (
    <button
      className={buttonStyle}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  color: "brand",
  type: "submit",
  value: 0
};

export default Button;
