import React, { useState } from "react";
import Auth from "./components/Auth";
import ProjectList from "./components/ProjectList";
import Todo from "./components/Todo";
import { jwtDecode } from "jwt-decode";

const App = () => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : null;
  });
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <>
          <h1>Todo Management App</h1>
          <ProjectList setSelectedProject={setSelectedProject} user={user} />
          {selectedProject && <Todo project={selectedProject} />}
        </>
      )}
    </div>
  );
};

export default App;
