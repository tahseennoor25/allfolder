const express = require("express");
const app = express();

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("good morning today is wednesday");
});

app.get("/about", (req, res) => {
    res.send("<h1>This is About Page</h1>");
});


app.listen(8000, () => {
    console.log("port listens through 8000");
});