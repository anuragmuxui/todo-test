require('dotenv').config();
const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/todos", require("./routes/todoRoutes"));
app.use("/api/gist", require("./routes/gistRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
