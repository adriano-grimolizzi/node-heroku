const logger = require('@agrimolizzi/logger')()
const app = require('express')()

const port = process.env.PORT || 3000

app.get('/', (_, response) => {
  response.send('Cani Cani Bei Cani')
})

app.listen(port, () => {
  logger.info(`Example app listening on port: ${port}`)
})
