import express from "express";
import cors from 'cors';
const app = express();
const port = 3002;

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', "*"],
    credentials: true
}));

let students = [];

app.get('/' , (req, res) => {
    res.status(200).send({allData: students})
})

app.post('/add-student', (req, res) => {
    let reqBody = req.body;
    students.push({name: reqBody.name, email: reqBody.email, fatherName: reqBody.fatherName});
    res.send(`Student Created ${reqBody.name}`);
})

console.log(students)

app.listen(port, () => {
    console.log("App is running in port number" , port)
})
