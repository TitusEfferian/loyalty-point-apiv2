import express from 'express'
var router = express.Router();

router.get('/', function (req, res) {
  res
    .status(200)
    .send({
      data:'welcome to voucher routes'
    })
});

export default router
