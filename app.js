const app = require('express')()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const includesSwearWords = require('./utils')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

const port = process.env.PORT || 3000

const mongoose = require('mongoose')

const mongoDbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'

mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true })

const Dog = mongoose.model('Dog', {
  name: String,
  height: Number
})

app.get('/', (_, response) => {
  response.render('home', { msg: 'Cani Cani Bei Cani!' })
})

app.get('/dogs', (_, response) => {
  Dog.find({})
    .lean() // gets a JSON object instead of a mongoose one
    .then(dogs => {
      console.log('Retrieved from DB:')
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

app.get('/swear-words', (_, response) => {
  response.render('swear-words', {})
})

app.post('/dogs', (request, res) => {
  const { body } = request

  if (includesSwearWords(body.name)) {
    res.redirect('/swear-words')
  } else {
    Dog.create(body).then((dog) => {
      console.log(dog)
      res.redirect('/dogs')
    }).catch((err) => {
      console.error(err)
    })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
