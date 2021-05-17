import { useSelector } from "react-redux";
import Todos from "./TodoList";

export const TodoList = () => {
  const todoList = useSelector((state) => state.todos);
  return <Todos todoList={todoList} />;
};
