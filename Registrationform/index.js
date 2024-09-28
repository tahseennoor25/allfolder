import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static('    public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/dbconnect')
var db=mongoose.connection
db.on('error', ()=> console.log("error in Connecting to Database"));
db.once('open', ()=> console.log("MongoDB Connect to Database"));

app.post("/sign_up", (req, res) => {
    var name= req.body.name
    var age= req.body.age
    var email= req.body.email
    var phone = req.body.phone
    var gender = req.body.gender
    var password = req.body.password

    var data={
        "name":name,
        "age":age,
        "email":email,
        "phone":phone,
        "gender":gender,
        "password":password
    }
    db.collection('users').insertOne(data,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully!")
    })
    return res.redirect('signup_successfull.html')
})

app.get("/", (req, res) => {
    res.set({
        "Allow-access-Allow-origin": '*'
    })

    return res.redirect("index.html");
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});