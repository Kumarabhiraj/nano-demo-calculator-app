const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello world!');
});

baseRouter.post('/add', (req, res) => {
    const added = req.body.first + req.body.second
    res.json({ "result": added});
});


baseRouter.post('/subtract', (req, res) => {
    const subtr = req.body.first - req.body.second
    res.json({ "result": subtr });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});