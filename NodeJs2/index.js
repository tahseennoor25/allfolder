import express from "express";
import helmet from "helmet";
import routes from "./src/routes/index.js";
import mongoose from "mongoose";
import { ENV } from "./src/constants/index.js";
import chalk from "chalk";


const app = express();

app.use(helmet ());

mongoose.connect(`mongodb+srv://${ENV.DB_USER}:${ENV.DB_PASSWORD}@cluster0.hwvt67d.mongodb.net/${ENV.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`);

mongoose.connection.on("connected", () => {
    console.log(chalk.white.bgGreen(" ---- Connected to MongoDB ----"));
})


app.get("/", (req, res) => {
    res.send("today is friday");
});

app.use("/api", routes);


app.listen(3000, () => {
    console.log("server runs on port and signs 3000");
});