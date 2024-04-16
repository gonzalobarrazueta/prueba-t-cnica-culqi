const substrings = require('./prueba-1')
const express = require('express')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server listening on port 3000");
});

app.post('/substrings', (req, res) => {

    const data = req.body;
    const response = substrings.findSubstrings(data.s, data.words);

    res.status(200).json({
        response
    });
});

app.listen(3000);
