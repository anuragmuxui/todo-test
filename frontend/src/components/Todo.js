import React, { useState } from "react";
import { addTodo, updateTodo, deleteTodo, exportProjectAsGist } from "../api";

const Todo = ({ project }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = async () => {
    if (!input.trim()) return;
    const newTodo = await addTodo(project._id, input);
    project.todos.push(newTodo.data);
    setInput("");
  };

  const handleToggleComplete = async (todoId, completed) => {
    await updateTodo(todoId, { completed: !completed });
  };

  const handleDeleteTodo = async (todoId) => {
    await deleteTodo(todoId);
    project.todos = project.todos.filter((todo) => todo._id !== todoId);
  };

  const handleExportGist = async () => {
    const response = await exportProjectAsGist(project._id);
    alert(`Gist created successfully! View here: ${response.data.url}`);
  };

  return (
    <div>
      <h3>{project.title}</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a task" />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {project.todos.map((todo) => (
          <li key={todo._id} className={todo.completed ? "completed" : ""}>
            {todo.text}
            <button onClick={() => handleToggleComplete(todo._id, todo.completed)}>✔</button>
            <button onClick={() => handleDeleteTodo(todo._id)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={handleExportGist}>Export as Gist</button>
    </div>
  );
};

export default Todo;
