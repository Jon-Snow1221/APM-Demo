const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');

const rollbar = new Rollbar({
    accessToken: '5b7049a7f0ca4e0699d217ce4e6eeb65',
    captureUncaught: true,
    captureUnhandledRejections: true,
});

const app = express();

app.use(express.json());

app.use('/style', express.static(path.join(__dirname,'./public/styles.css')))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
});

let students = []

app.post('/api/student', (req, res) => {
    let { name } = req.body
    name = name.trim()

})

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4400

app.listen(port, () => {
    console.log(`Server is running on ${port}!`)
});

