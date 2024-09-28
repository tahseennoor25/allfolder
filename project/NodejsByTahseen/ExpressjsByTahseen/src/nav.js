const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1>Welcome to My Home Page!</h1>");
    res.write("<h1>Welcome to Again My Home Page!</h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("<h1>This is my About Page!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>This is Contact Page!</h1>");
});

app.get("/temp", (req, res) => {
    res.send([
        {
        id: 8756,
        name: "Saqib",
    },
    {
        id: 8678,
        name: "Maqsood",
    },
    {
        id: 1234,
        name: "Arsalan",
    },
]); 
});

app.listen(port, () => {
    console.log(`port runs through ${port}`);
});

