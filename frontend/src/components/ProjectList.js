import React, { useEffect, useState } from "react";
import { fetchProjects, createProject } from "../api";

const ProjectList = ({ setSelectedProject, user }) => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data } = await fetchProjects();
    setProjects(data);
  };

  const handleCreateProject = async () => {
    if (!title) return alert("Enter project title!");
    await createProject(title, user.userId);
    setTitle("");
    loadProjects();
  };

  return (
    <div>
      <h2>Projects</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project title" />
      <button onClick={handleCreateProject}>Create</button>
      <ul>
        {projects.map((project) => (
          <li key={project._id} onClick={() => setSelectedProject(project)}>
            {project.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
