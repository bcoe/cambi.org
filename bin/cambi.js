#!/usr/bin/env node

require('dotenv').config()

const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(process.env.MAILCHIMP)

require('yargs')
  .command('lists', 'display all mailchimp lists', () => {}, () => {
    mailchimp.get('/lists')
      .then(results => {
        results.lists.forEach(result => {
          console.info(`${result.name}: ${result.id}`)
        })
      })
      .catch(function (err) {
        console.error(err.message)
      })
  })
  .command('subscribers <id>', 'show subscribers for an email list', () => {}, (argv) => {
    mailchimp.get(`/lists/${argv.id}/members`)
      .then(results => {
        results.members.forEach(member => {
          console.info(member.email_address)
        })
      })
      .catch(function (err) {
        console.error(err.message)
      })
  })
  .command('subscribe <id> <email>', 'subscribe email to list', () => {}, (argv) => {
    mailchimp.post(`/lists/${argv.id}/members`, {
      email_address: argv.email,
      status: 'subscribed'
    })
    .then(results => {
      console.info(results.email_address)
    })
    .catch(function (err) {
      console.error(err.message)
    })
  })
  .demand(1)
  .parse()
