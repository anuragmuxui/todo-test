const express = require("express");
const Todo = require("../models/Todo");
const Project = require("../models/Project");
const router = express.Router();

router.post("/:projectId", async (req, res) => {
  const { text } = req.body;
  const todo = new Todo({ text, project: req.params.projectId });
  await todo.save();
  res.status(201).json(todo);
});

router.put("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
