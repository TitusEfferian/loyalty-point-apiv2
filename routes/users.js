import express from 'express'
import { findAll, findById } from '../controller/users';
import generateKey from '../controller/generateKey';
var router = express.Router();

router.get('/', findAll);

router.get('/:id', findById)

router.post('/generate_key',generateKey)

export default router