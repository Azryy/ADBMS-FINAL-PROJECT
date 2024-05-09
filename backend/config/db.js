import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://doradokeii0202:mUWg7Ks7b7afX4Rm@cluster0.mvxne1r.mongodb.net/kapalaran').then(()=>console.log("DB Connected"));
}

