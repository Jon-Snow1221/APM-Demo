const express = require('express');
const path = require('path');
const Rollbar = require('rollbar');

const rollbar = new Rollbar({
    accessToken: '5b7049a7f0ca4e0699d217ce4e6eeb65',
    captureUncaught: true,
    captureUnhandledRejections: true,
});

const app = express();

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
});

let students = []

app.post('api/student', (req, res) => {
    let { name } = req.body
    name = name.trim()

    students.push(name)

    rollbar.log('student added successfully', {author: 'Jon', type: 'manual entry'})

    res.status(200).send(students)
})

const port = process.env.PORT || 4400

app.listen(4400, () => {
    console.log(`Server is running on ${port}!`)
});

