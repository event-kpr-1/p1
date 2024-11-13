import express from 'express'

// controllers
import {attended} from '../controllers/attendance_controller.js'

const router = express.Router();

router.post("/:event/:id" , attended)


export default router;