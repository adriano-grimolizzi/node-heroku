const app = require('express')()
const exphbs = require('express-handlebars')
const logger = require('@agrimolizzi/logger')()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

app.get('/', (_, response) => {
  response.render('home', { msg: 'Cani Cani Bei Cani!'})
})

const dogs = [
  { name: "Fido", height: 1.40 },
  { name: "Rex", height: 1.45 }
]

app.get('/dogs', (_, response) => {
  response.render('dogs-index', { dogs: dogs })
})

app.listen(port, () => {
  logger.info(`Example app listening on port: ${port}`)
})
