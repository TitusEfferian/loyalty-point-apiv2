import express from 'express'
var router = express.Router();
import { showListVoucher, generateVoucher } from '../controller/vouchers';
router.get('/list', showListVoucher);

router.post('/generate',generateVoucher)

export default router
