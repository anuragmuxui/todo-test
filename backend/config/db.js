// const mongoose = require("mongoose");
// require("dotenv").config();

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  // Check if MONGO_URI is defined
  if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;




