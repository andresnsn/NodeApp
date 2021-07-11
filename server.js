const express = require('express')

const app = express()

app.use(express.json())

require('dotenv').config()

const api = require('./backend/routes')

app.get('/', (req, res) => {
    res.json({
        'success': true
    })
})

app.use('/api', api)

const PORT = process.env.PORT;

app.listen(PORT)
