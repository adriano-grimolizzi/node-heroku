const app = require('express')()
const { response } = require('express')
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const port = process.env.PORT || 3000

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/dogs', { useNewUrlParser: true, useUnifiedTopology: true })

const Dog = mongoose.model('Dog', {
  name: String,
  height: Number
})

app.get('/', (_, response) => {
  response.render('home', { msg: 'Cani Cani Bei Cani!' })
})

app.get('/dogs', (_, response) => {
  Dog.find({})
    .then(dogs => {
      console.log(dogs)
      response.render('dogs-index', { dogs: dogs })
    })
    .catch(err => {
      console.log(err)
    })
})

app.get('/dogs/new', (_, response) => {
  response.render('dogs-new', {})
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
