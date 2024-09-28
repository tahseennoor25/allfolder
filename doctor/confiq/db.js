import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected ${mongoose.connection.host}`.bgGreen.white); 
    } catch (error) {
    console.log(`MongoDB Server is Issuing ${error}` .bgMagenta.white);
    }
};
export default connectDB;
