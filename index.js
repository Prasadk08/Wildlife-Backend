
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

connectDB();

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});

