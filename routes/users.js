import express from 'express'
import { findAll, findById } from '../controller/users';
var router = express.Router();

router.get('/', findAll);

router.get('/:id', findById)

export default router