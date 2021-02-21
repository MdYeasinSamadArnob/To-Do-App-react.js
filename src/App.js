import Input from "./input";
import "./styles.css";
import TodoItem from "./todoitem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./todoslice";

// const todoList = [
//   {
//     item: "todo",
//     done: false,
//     id: 11222323
//   }
// ];

export default function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="App">
      <h1>Arnob ToDo Project : React.js</h1>
      {/* To do list */}
      <div className="app_container">
        <div className="app_todocontainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>

        <Input />
      </div>
      {/* done */}
    </div>
  );
}
