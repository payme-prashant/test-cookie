import React from "react";

interface buttonProps {
  label: string;
}
function Button(props: buttonProps) {
  return (
    <>
      <div id="somed" style={{ color: "red" }}>
        {props.label}
      </div>
      <div id="somed" style={{ color: "red" }}>
        {props.label}
      </div>
    </>
  );
}

export default Button;
