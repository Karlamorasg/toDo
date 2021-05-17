import React from "react";
import { List } from "@material-ui/core";
import { SingleTodo } from "./SingleTodo";

const TodoList = ({ todoList }) => {
  return (
    <List>
      {todoList.length > 0 &&
        todoList.map((todo) => (
          <SingleTodo
            id={todo.id}
            description={todo.description}
            key={todo.id}
            title={todo.title}
          />
        ))}
    </List>
  );
};

export default TodoList;
