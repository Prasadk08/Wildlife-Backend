
import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    pname:String,
    description:String,
    detail:String,
    imageUrl:String
});

const Program = mongoose.model("Program", programSchema);
export default Program;