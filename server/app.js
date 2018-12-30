const express = require(`express`)
const app = express()
const user = require(`./routes/user`)
const transaction = require(`./routes/transaction`)
const session = require(`express-session`)


app.use(session({
    secret: 'keyboard cat',
    resave: true
  }))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(`/user`, user)
app.use(`/transaction`, transaction)

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});