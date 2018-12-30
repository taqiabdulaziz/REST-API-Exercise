const db = require(`../models`)

class ControllerUser {
    static findAll(req, res) {
        db.User.findAll()
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                res.status(404).json(err)
            });
    }

    static register(req, res) {
        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
            .then((result) => {
                res.redirect(`/user`)
            }).catch((err) => {
                res.status(400).json({
                    err: err
                })
            });
    }

    static findOne(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                result ?
                    res.status(200).json(result) :
                    res.status(404).json({
                        msg: `data not found`
                    })
            }).catch((err) => {
                res.status(404).json(err)
            });
    }

    static update(req, res) {
        let data = {}
        for (const key in req.body) {
            data[key] = req.body[key]
        }

        db.User.update(data, {
            where: {
                id: req.params.id
            }
        })
            .then((result) => {
                res.status(200).json({
                    msg: `berhasil`
                })
            }).catch((err) => {
                res.status(404).json(`tidak berhasil`)
            });
    }

    static login(req, res) {
        req.session.user = {
            user: req.body.username,
            pass: req.body.password
        }
        res.send(req.session)
    }

}

module.exports = ControllerUser