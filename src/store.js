import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoslice";

export default configureStore({
  reducer: {
    todos: todoReducer //store current state to access in selector
  }
});
