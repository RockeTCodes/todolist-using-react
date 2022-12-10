import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function change(event) {
    const { value } = event.target;
    setInput(value);
  }

  function createItems(item) {
    return <li>{item}</li>;
  }

  function addItem() {
    setItems((preValue) => {
      return [...preValue, input];
    });
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={change} type="text" value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>{items.map(createItems)}</ul>
      </div>
    </div>
  );
}

export default App;
