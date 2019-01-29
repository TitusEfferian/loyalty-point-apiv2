import express from 'express'
var router = express.Router();
import { showListVoucher, buyVouchers,  } from '../controller/vouchers';
router.get('/list', showListVoucher);

router.post('/buy_voucher',buyVouchers)

export default router
