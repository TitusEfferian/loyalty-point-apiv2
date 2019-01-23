import express from 'express'
var models = require('../database/models')
var router = express.Router();

router.get('/', function (req, res) {
  models.rl_user_key.findAll()
    .then(function (result) {
      res.status(200).send({
        data: result
      })
    })
    .catch(function (err) {
      res.status(500).send(err)
    })
});

router.get('/:id', function (req, res) {
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
})

export default router