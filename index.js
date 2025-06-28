

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Program = require('./model/program');
const AnimalCard = require('./model/animalcard');


const cors = require('cors');
app.use(cors());

// app.use(cors({
//   origin: "https://wildlife-xdqb.onrender.com",
// }));



const dbURL = "mongodb+srv://prasadkshirsagar1199:wRznkiD6eSW4xnfd@cluster0.9fjxaei.mongodb.net/Wildlife?retryWrites=true&w=majority&appName=Cluster0";
// wdIBbFfQ5QaLqGto


async function main(){
    await mongoose.connect(dbURL)
}

main().then(async () => {
    console.log("Connected to MongoDB");

}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})


app.get('/getAnimalCards', async (req, res) => {
    try {
        console.log("Calling server")
        const animalCards = await AnimalCard.find();
        res.status(200).json(animalCards);
    } catch (error) {
        console.error("Error fetching animal cards:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

app.get("/getPrograms",async(req,res)=>{
    try {
        console.log("Fetching programs from database");
        const programs = await Program.find();
        res.status(200).json(programs);
    } catch (error) {
        console.error("Error fetching programs:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})