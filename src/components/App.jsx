import React, { useState } from "react";
import List from "./List";
import InputArea from "./InputArea";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function change(event) {
    const { value } = event.target;
    setInput(value);
  }

  function addItem() {
    setItems((preValue) => {
      return [...preValue, input];
    });
    setInput("");
  }

  function deleteItem(id) {
    setItems((preValue) => {
      return preValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <InputArea onChange={change} value={input} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((listitem, index) => (
            <List key={index} id={index} onPush={deleteItem} value={items} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
