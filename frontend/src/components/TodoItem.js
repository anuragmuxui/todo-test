import { updateTodo, deleteTodo, markTodoComplete } from "../services/api";

const TodoItem = ({ todo, refresh }) => {
  const handleUpdate = async () => {
    const newDesc = prompt("Enter new description:", todo.description);
    if (newDesc) {
      await updateTodo(todo._id, newDesc);
      refresh();
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await deleteTodo(todo._id);
      refresh();
    }
  };

  const handleMarkComplete = async () => {
    await markTodoComplete(todo._id);
    refresh();
  };

  return (
    <li>
      <span style={{ textDecoration: todo.status === "completed" ? "line-through" : "none" }}>
        {todo.description}
      </span>
      <button onClick={handleMarkComplete}>
        {todo.status === "completed" ? "Undo" : "Complete"}
      </button>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
