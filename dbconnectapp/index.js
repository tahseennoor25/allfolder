import express from "assert";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("mongoDB database is connect successfully.");
    app.listen(PORT, () => {
      console.log(`port runs on ${PORT}`);
    });
  })
  .catch((error) => console.log("error"));

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const userModel = mongoose.model("users", userSchema);

app.get("/getUsers", async (req, res) => {
  const userData = await userModel.find();
  res.json(userData);
});
