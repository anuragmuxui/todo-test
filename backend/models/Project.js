const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  todos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Todo" }],
});

module.exports = mongoose.model("Project", ProjectSchema);
