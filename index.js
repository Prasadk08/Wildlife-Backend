
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



// app.get('/wildlife', async (req, res) => {
//     try {
//         console.log("Calling server")
//         const animalCards = await AnimalCard.find();
//         res.status(200).json(animalCards);
//     } catch (error) {
//         console.error("Error fetching animal cards:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// app.get("/getPrograms",async(req,res)=>{
//     try {
//         console.log("Fetching programs from database");
//         const programs = await Program.find();
//         res.status(200).json(programs);
//     } catch (error) {
//         console.error("Error fetching programs:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// })