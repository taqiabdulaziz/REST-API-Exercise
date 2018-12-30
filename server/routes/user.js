const app = require(`express`).Router()
const db = require(`../models`)
const ControllerUser = require(`../Controllers/ControllerUser`)

app.get(`/`, ControllerUser.findAll)

app.post(`/login`, ControllerUser.login)

app.post(`/register`, ControllerUser.register)

app.get(`/:id`, ControllerUser.findOne)

app.put(`/:id`, ControllerUser.update)

module.exports = app