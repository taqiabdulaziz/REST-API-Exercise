const route = require(`express`).Router()


route.get(`/`, (req, res) => {
    res.send(`testtt`)
})

module.exports = route