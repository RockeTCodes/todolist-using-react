import React from "react";

function InputArea(props) {
  return (
    <input
      onChange={(event) => {
        props.onChange(event);
      }}
      value={props.value}
    />
  );
}

export default InputArea;
