const express = require('express')
const app = express()

app.use(express.static('public'))

// this is where we'll add Keanan's stuff.
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))