import express from 'express'
var models = require('../database/models')
var router = express.Router();

router.get('/', function (req, res) {
  models.rl_user_key.findAll().then(function (result) {
    res.status(200).send(result)
  })
});

export default router
