import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolist: []
};

export const todoSlice = createSlice({
  name: "todosss",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todolist.push(action.payload);
    },
    setCheck: (state, action) => {
      state.todolist.forEach((item) => {
        if (action.payload === item.id) {
          if (item.done === true) {
            item.done = false;
          } else {
            item.done = true;
          }
        }
      });
    }
  }
});

export const { saveTodo, setCheck } = todoSlice.actions;
export const selectTodoList = (state) => state.todos.todolist;
export default todoSlice.reducer;
