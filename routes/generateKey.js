import generateKey from '../controller/generateKey';
import express from 'express'
const router = express.Router();

router.post('/', generateKey)

export default router
