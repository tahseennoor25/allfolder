import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcryptjs from "bcryptjs";



const PORT = 9000
const app = express();
const MONGO_URL = "mongodb://localhost:27017/saturday";

app.use(cors());
app.use(express.json());
mongoose.connect(MONGO_URL);
const db = mongoose.connection;

db.on('error',(error)=>{
    console.error("MongoDB connection Error", error)
})
db.once("open",()=> {
console.log("MongoDB is connected")
})
const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User= mongoose.model("User",userSchema)
app.post("/register", async (req, res) => {
    try {

        const hasspassword = await bcryptjs.hashSync(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hasspassword,
        });
        const savedUser= await newUser.save()
        res.status(201).json(savedUser)
    } catch (error) {
        console.error("Error during registration", error);
        res.status(500).json({error: "my internet server error"});
    }
});
app.listen(PORT, ()=> {
    console.log(`server is running on: ${PORT}`)
})