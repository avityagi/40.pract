import React, { useState } from "react";

function App() {
  const [current, setCurrent] = useState("");
  const [list, setList] = useState(["A Item"]);
  function handleChange(event) {
    const { value } = event.target;
    setCurrent(value);
  }
  function handleClick(event) {
    setList((prevArr) => [...prevArr, current]);
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={current} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(function (listItem) {
            return <li>{listItem}</li>;
          })}
          {/* <li>A Item </li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
