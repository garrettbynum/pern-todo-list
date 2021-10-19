import React, { useEffect, useState } from "react";

import TableRow from "./TableRow";

const TableBody = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const removeTodoFromUi = (id) => {
    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  return (
    <tbody>
      {todos.map((todo) => (
        <TableRow
          todo={todo}
          removeTodoFromUi={removeTodoFromUi}
          key={todo.todo_id}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
