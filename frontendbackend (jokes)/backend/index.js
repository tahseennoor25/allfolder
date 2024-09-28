import express from "express";

const app = express();

app.use(express.static('dist'));

//app.get("/", (req, res) => {
    //res.send("Connect frontend to backend");
//});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: " A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "  joke",
            content: "This is second joke"
        },
        {
            id: 3,
            title: "  joke",
            content: "This is third joke"
        },
        {
            id: 4,
            title: "  joke",
            content: "This is fourth joke"
        },
        {
            id: 4,
            title: "  joke",
            content: "This is fifth joke"
        },
    ]
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});
