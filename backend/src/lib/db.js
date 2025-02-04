import mongoose from "mongoose";
export const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://harpreetkaursaini5865:qVztV6axGJiSXUNM@cluster0.xlhuv.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`MongoDB connected: ${conn.connection.host}`);

  }catch(error){
    console.log("MongoDB connection error:",error);
  }
};