const app = require('express')()
const exphbs = require('express-handlebars')
const logger = require('@agrimolizzi/logger')()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.get('/', (_, response) => {
  response.render('home', { msg: 'Cani Cani Bei Cani!'})
})

app.listen(port, () => {
  logger.info(`Example app listening on port: ${port}`)
})
