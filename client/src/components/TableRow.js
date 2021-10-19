import React, { useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const TableRow = ({ todo, removeTodoFromUi }) => {
  const [status, setStatus] = useState(todo.status);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      removeTodoFromUi(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <tr key={todo.todo_id}>
      <td>{todo.description}</td>
      <td>
        <button className="btn">
          {todo.status === "not started" ? "Not Started" : ""}
        </button>
      </td>
      <td>
        <EditTodo todo={todo} />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(todo.todo_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
