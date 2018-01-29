require('dotenv').config()

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP)

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static('public'))

app.post('/subscribe', (req, res) => {
  mailchimp.post(`/lists/${process.env.LIST_ID}/members`, {
    email_address: req.body.email,
    status: 'subscribed'
  })
  .then(() => {
    res.send('ok')
  })
  .catch(function (err) {
    res.status(500).send(err.message)
  })
})

app.listen(port, () => console.log(`Cambi's celebration running on ${port}`))
