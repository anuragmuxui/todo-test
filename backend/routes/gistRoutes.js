const express = require("express");
const axios = require("axios");
const Project = require("../models/Project");
const router = express.Router();

router.post("/:projectId/export", async (req, res) => {
  const project = await Project.findById(req.params.projectId).populate("todos");

  const markdownContent = `# ${project.title}\n\n` +
    project.todos.map(todo => `- ${todo.completed ? "[x]" : "[ ]"} ${todo.text}`).join("\n");

  const response = await axios.post(
    "https://api.github.com/gists",
    {
      files: { [`${project.title}.md`]: { content: markdownContent } },
      description: `Todo list for project: ${project.title}`,
      public: false,
    },
    {
      headers: { Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}` },
    }
  );

  res.json({ message: "Gist created", url: response.data.html_url });
});

module.exports = router;
