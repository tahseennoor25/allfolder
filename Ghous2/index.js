import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";

const app = express();
app.use(helmet());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Ghous2");
mongoose.connection.on("connected", () => {
    console.log(chalk.green("Connected to MongoDB"));
});





app.get("/", (req, res) => {
    res.send("This is Backend two")
});

app.use("/api", routes);

app.listen(2000, ()=>{
    console.log("My server is running again for backend 2 on port: 2000");
});