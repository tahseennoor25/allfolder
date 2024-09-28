const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.write("<h1> Welcome to my Home page </h1>");
    res.write("<h1> Welcome to again my Home page </h1>");
    res.send();
});

app.get("/about", (req, res) => {
    res.send("This is About Page!");
});

app.get("/contact", (req, res) => {
 res.send({
    id: 234,
    name: "javed shiekh",
 });
});

app.get("/temp", (req, res) => {
    res.send({
        id: 234,
        name: "javed shiekh",
    });
});

app.listen(3000, () => {
    console.log("hi good morning friends welcome to express js");
});