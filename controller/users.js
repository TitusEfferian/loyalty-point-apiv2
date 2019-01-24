import models from '../database/models'

export const findAll = (req, res) => {
    models.rl_user_key.findAll()
        .then(function (result) {
            res.status(200).send({
                data: result
            })
        })
        .catch(function (err) {
            res.status(500).send(err)
        })
}

export const findById = (req, res) => {
    const user_id = req.params.id
    models.rl_user_key.findById(user_id)
        .then(function (result) {
            res.status(200).send({
                data: result
            })
        })
        .catch(function (err) {
            res.status(500).send(err)
        })
}

