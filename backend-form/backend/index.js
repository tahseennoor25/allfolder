import express from 'express';

const app = express();
app.get('/', (req, res) => {
    res.send("today is Saturday");
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`my server is runing on port & port is: ${PORT}`);
});



