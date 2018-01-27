const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

// this is where we'll add Keanan's stuff.
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Cambi's celebration running on ${port}`))