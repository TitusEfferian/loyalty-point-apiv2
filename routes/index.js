var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res
    .status(200)
    .send({
      data:'welcome to loyalty point api v1'
    })
});

export default router
