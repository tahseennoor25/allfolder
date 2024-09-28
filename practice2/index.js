import express from "express";
const app = express();
app.use(express.json());

const users = [];


//app.delete("/user/:id", (req, res) => {
  //  const { id } = req.params;
   // const index = users.findIndex(obj => obj.id === Number(id));
   // users.splice(index, 1)
   // res.send({ message: "tahseen wah yr you have deleted user successfully"})
//})

app.put("/user/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(obj => obj.id === id)
    users.splice(index, 1, {... req.body, id})
    res.send({id, message: "You Updated User Id"})
})

app.delete("/user/:id", (req, res) => {
    const { id } = req.params;
    users = users.filter(obj => obj.id !== id)
    res.send({message: "User Deleted Successfully"})
})


app.get("/user", (req,res) => {
    res.send(users)
})

//app.post("/user", (req, res) => {
  //  users.push({...req.body, id: users.length + 1})
  //  console.log("{...req.body, id: users. lenght + 1}", req.body);
   // res.send({user: req.body, message: "user rueturn successfully"})
//})

app.post("/user", (req, res) => {

    users.push({...req.body, id: Date.now().toString(36)})
    res.send({user: req.body, message: "The User has been added successfully!"})
})

app.listen(5000, () => {
    console.log("Server is running again return on port:")
})