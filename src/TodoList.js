import React, { useState } from "react";
import "./todolist.css";

function Todolist() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleClick = (e) => {
    if (!item) {
      alert("please enter some data");
    } else {
      setList([...list, item]);
      setItem("");
    }
  };

  const deleteHandle = (id) => {
    console.log("id:", id);
    let filterdData = list.filter((x, index) => index !== id);
    setList(filterdData);
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <span>Add Items in the input box</span>

        <div className="inputBox">
          <input
            className="inputStyle"
            value={item}
            type="text"
            onChange={(e) => setItem(e.target.value)}
            placeholder="✍️ your todoItems...."
          ></input>
          <span>
            <button onClick={handleClick}>Add</button>
          </span>
        </div>

        {list.map((element, index) => {
          return (
            <div className="eachItem" key={index}>
              <h3 className="items">{element}</h3>
              <button onClick={() => deleteHandle(index)}>delete</button>
            </div>
          );
        })}

        <div>
          <button
            onClick={() => {
              setList([]);
            }}
          >
            Remove all
          </button>
        </div>
      </div>
    </>
  );
}

export default Todolist;
