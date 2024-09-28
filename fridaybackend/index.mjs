import express from "express";
import cors from "cors";
const app = express();
const port = 3005;
app.use(express.json());
app.use(cors({
    origin:["http://localhost3000", "*"],
    credentials: true,
}));

let teachers = [];

app.get("/", (req, res) => {
    res.status(200).send({allData: teachers})
})

app.post("/add-teacher", (req, res) => {
    let reqBody = req.body;
    teachers.push({name: reqBody.name, fatherName: reqBody.fatherName, email: reqBody.email, });
    console.log(teachers);
    res.send(`Teacher Created ${reqBody.name}`);
})
console.log(teachers)

app.listen(port, () => {
    console.log("my app runs on port", port)
});
