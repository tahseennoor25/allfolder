import express from "express";
import router from "./routes/index.js";
import mongoose from "./db/index.js";
const app = express();

app.use(express.json());

mongoose.connection.on('error', (err) => {
    console.log("Database error", err)
});

mongoose.connection.on("open", () =>{
    console.log("Database Connected")
})

app.get("/", (req, res) => {
    res.send(new Date().toDateString())
})

app.use("/api", router );

app.listen(3000, () => {
    console.log("server runs on 3000")
})