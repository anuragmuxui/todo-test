const express = require("express");
const Project = require("../models/Project");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, userId } = req.body;
  const project = new Project({ title, userId });
  await project.save();
  res.status(201).json(project);
});

router.get("/", async (req, res) => {
  const projects = await Project.find().populate("todos");
  res.json(projects);
});

module.exports = router;
