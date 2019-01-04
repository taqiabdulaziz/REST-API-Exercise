const route = require(`express`).Router()
const TransactionController = require(`../controller/TransactionController`)

route.post(`/`, TransactionController)

module.exports =  route