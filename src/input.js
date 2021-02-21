import React, { useState } from "react";
import "./input.css";
import { saveTodo } from "./todoslice";

import { useDispatch } from "react-redux";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  function addTodo() {
    console.log(`Adding ${input}`);

    dispatch(
      saveTodo({
        item: input,
        done: false,
        id: Date.now()
      })
    );
    // saveTodo({
    //   name: input
    //   // done: false,
    //   // id: Date.now()
    // })
  }

  return (
    <div className="input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>ADD</button>
    </div>
  );
};

export default Input;
