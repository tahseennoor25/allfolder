import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const {name, email, password, role} = req.body;
    try {
       const user = new User({name, email, password, role});
       await user.save();
       res.status(201).json({ message: "user Created Successfuly"}); 
    } catch (error) {
    res.status(400).json({ error: "your email already exists"});    
    }
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
      const user = await User.findOne({email});
      if(!user) return res.status(404).json({ error: "User not Found"});
      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) return res.status(400).json({error: "invalid Credentials"});

      const token = jwt.sign({ id: user._id, role: user.role}, "secrect")

    } catch (error) {
      res.status(500).json({ error: "Server Error please check it"});
    }
});
module.exports = router;
