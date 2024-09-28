import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 7000

mongoose.connect("mongodb://localhost:27017/forms", {
    useNewUrlParsel: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected Successfully!"))
  .catch(error => console.log(error));

app.listen(7000, () => console.log(`server is running on port and port is ${PORT}`));