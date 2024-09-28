import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/Userroutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL)
.then(() => {
    console.log("MongoDB Connected Successfully!");
    app.listen(PORT, () => {
        console.log(`Server is running on port & port is ${PORT}`);
    });
})
.catch((error) => console.log(error));
app.use("/api", route);