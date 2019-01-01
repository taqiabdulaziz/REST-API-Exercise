var mongoose = require(`mongoose`)
var express = require(`express`)
var user = require(`./routes/user`)
var app = express()
var db = mongoose.connection

app.set(express.urlencoded({ extended: true }))
app.set(express.json())
app.use(`/user`, user)

mongoose.connect(`mongodb://localhost/test`, { useNewUrlParser: true })
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log(`We're connected!`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

module.exports = app

