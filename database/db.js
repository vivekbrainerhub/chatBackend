const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

exports.connectDB = async () => {
  if (!mongoString) {
    console.error("DATABASE_URL is not defined in the environment variables.");
    process.exit(1); // Exit with failure code
  }

  try {
    const conn = await mongoose.connect(mongoString);
    console.log(`Mongoose DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};
