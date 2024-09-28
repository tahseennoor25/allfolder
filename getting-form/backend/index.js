import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import EmpolyeeModel from "./model/Empolyeee.js";
const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://localhost:27017/saylani")

app.post("/register", (req, res) => {
    EmpolyeeModel.create(req.body)
    .then(EmpolyeeModel => res.json(EmpolyeeModel))  
    .catch(error => res.json(error))
})

app.listen(5000, () => {
    console.log("my server is running on port")
})