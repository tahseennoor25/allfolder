const express = require("express")
const mongoose = require('mongoose')
const app = express();
const port = 8000;
app.use(express.json());

// mongo connection
const DB_URL = mongoose.connect('mongodb+srv://tahseennoor25:tahseen@cluster0.hwvt67d.mongodb.net/')
mongoose.connection.on('connected',()=>{console.log('mongo connected sucessfuly')})
mongoose.connection.on('error',(err)=>{console.log('mongo connected sucessfuly',err.message)})


let userData = [];
app.get("/", (req,res) => {
    res.send("today is friday");
});
app.post("/mypost", (req, res) =>{
    console.log(req);
    userData = [...userData, {"name": req.body.name, "FatherName": req.body.FatherName, "age": req.body.age, "phoneNumber": body.req.phoneNumber}]
    res.send({"your request": "received"});
});

app.get('/studentdata', (req, res) => {
    res.send({"status": "success", "students": userData});
});

app.listen(port, () => {
    console.log(`port runs on port ${port}`);
});

