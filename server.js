const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const path = require('path');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', express.static(path.join(__dirname, '../client')))


app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
})

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../client/protectpage.html'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))