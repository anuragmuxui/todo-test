import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById, addTodo } from "../services/api";
import TodoItem from "./TodoItem";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    const res = await getProjectById(id);
    setProject(res.data);
  };

  const handleAddTodo = async () => {
    if (!newTodo) return alert("Enter a todo description!");
    await addTodo(id, newTodo);
    setNewTodo("");
    fetchProject();
  };

  return project ? (
    <div>
      <h2>{project.title}</h2>
      <input
        type="text"
        placeholder="Enter new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {project.todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} refresh={fetchProject} />
        ))}
      </ul>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ProjectDetails;
