const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

const port = process.env.PORT || 4400

app.listen(4400, () => {
    console.log(`Server is running on ${port}!`)
});

