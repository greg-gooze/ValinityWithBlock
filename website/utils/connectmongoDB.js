import Mongoose from "mongoose";

const connectDB = async () => Mongoose.connect("mongodb+srv://Clement:6bLjkVAXszH4M5@cluster0.x4vxzdc.mongodb.net/?retryWrites=true&w=majority");

export default connectDB;
