
import mongoose from "mongoose";

const animalCardSchema = new mongoose.Schema({
    name:String,
    description:String,
    facts:String,
    imageUrl:String,
    category:String

})

const AnimalCard = mongoose.model('AnimalCard', animalCardSchema);
export default AnimalCard;