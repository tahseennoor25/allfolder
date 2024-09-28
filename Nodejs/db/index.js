import mongoose from "mongoose";
import 'dotenv/config';
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hwvt67d.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url);
export default mongoose;