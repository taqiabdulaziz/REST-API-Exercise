const app = require(`express`).Router()
const db = require(`../models`)

app.post('/', (req, res) => {
    let data = {}
    for (const key in req.body) {
        data[key] = req.body[key]
    }
    console.log(data);
    
    db.Transaction.create(data)
        .then((result) => {
            res.status(200).json({
                msg: `Transaction success`
            })
        }).catch((err) => {
            res.status(404).json({ err: err })
        });
});

module.exports = app