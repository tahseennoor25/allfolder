require('dotenv').config();
import express from "express";
const app = express();
const port = 3000;

const githubData = {
    
}

app.get("/", (req, res) => {
    res.send("good morning to all");  
});

app.get("/twitter", (req, res) => {
    res.send("i am good here");
});

app.get("/login", (req, res) => {
    res.send(" <h1> please code with me </h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h2>we will meet soon on youtube</h2>")
})
app.listen(process.env.PORT, () => {
    console.log(`server runs port on my ${port}`);
});