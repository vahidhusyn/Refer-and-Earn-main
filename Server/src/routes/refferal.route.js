import express from 'express'
import { createRefferal } from '../controllers/RefferalForm.controller.js'

const router = express.Router()

router.post('/', createRefferal)

export default router