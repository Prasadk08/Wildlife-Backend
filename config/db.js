import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const ATLASDB_Url =process.env.ATLASDB_Url
    const conn = await mongoose.connect(ATLASDB_Url);
    console.log("MongoDB connected to Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
