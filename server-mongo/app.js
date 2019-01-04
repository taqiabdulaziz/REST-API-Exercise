var mongoose = require(`mongoose`)
var express = require(`express`)
var user = require(`./routes/user`)
var item = require(`./routes/item`)
var app = express()
var db = mongoose.connection

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(`/user`, user)
app.use(`/item`, item)

mongoose.connect(`mongodb://localhost:27017/test`, { useNewUrlParser: true })

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`We're connected!`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

module.exports = app

