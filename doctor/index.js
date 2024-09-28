import express from "express";
import colors from "colors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./confiq/db.js";
import router from "./routes/Userroutes.js"
// dotenv config

dotenv.config();

// mongoDB connection

connectDB();
// rest object 
const app = express();

// middlewres
app.use(express.json());
app.use(morgan("dev"));


// routes

app.use("/api", router);

// port
const port = process.env.PORT || 7070
// listen port
app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE}  on port ${process.env.PORT}` .bgRed.white);
});
