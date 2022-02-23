const { default: axios } = require('axios');
const cron = require('node-cron');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const jwt = proccess.env.JWT_TOKEN || ''

app.get('/', (req, res) => {
  res.send({ success: true })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  cron.schedule('*/5 * * * *', () => {
    console.log('⏰ Task a cada 5 minutos')

    axios.post('https://glou-homolog.herokuapp.com/cronjob/every-five-minutes')
      .then(({data}) => console.log({ data }))
      .catch(err => console.log({ err: err.message }))
  });

  cron.schedule('0 11 * * *', () => {
    console.log('⏰ Task diária às 11:00')

    axios.post('https://glou-homolog.herokuapp.com/cronjob/every-day')
      .then(({data}) => console.log({ data }))
      .catch(err => console.log({ err: err.message }))
  })
})
