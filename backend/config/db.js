import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://imtiaz:abc@cluster0.lnxyjdf.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

//MONGODB_URI=mongodb+srv://imtiaz:abc@cluster0.lnxyjdf.mongodb.net/?appName=Cluster0