import React from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        props.onChange(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default List;
