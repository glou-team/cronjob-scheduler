const { default: axios } = require('axios');
const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('⏰ Task a cada 1 segundo')
  axios.post('http://localhost:1337/cronjob/every-second')
    .then(({data}) => console.log({ data }))
    .catch(err => console.log({ err: err.message }))
});