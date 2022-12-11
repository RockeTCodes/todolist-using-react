import React from "react";

function List(props) {
  return (
    <div
      onClick={() => {
        props.onPush(props.id);
      }}
    >
      <li>{props.value}</li>
    </div>
  );
}

export default List;
