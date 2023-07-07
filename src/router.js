import express from 'express'
import { getActualityPost } from './controller/actuality_controller.js'

const router = express.Router()

router.get('/actuality', getActualityPost)

export default router