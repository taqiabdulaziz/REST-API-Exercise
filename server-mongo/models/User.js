var mongoose = require(`mongoose`)

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    point: Number,
})

var User = mongoose.model(`User`, userSchema)

module.exports = User