import React from "react";
import "./todoitem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "./todoslice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoitem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoitem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
