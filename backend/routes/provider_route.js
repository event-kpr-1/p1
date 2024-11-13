import express from 'express'

// controllers
import {printid} from '../controllers/provider_controller.js'

const router = express.Router();

router.get("/printid" , printid)


export default router;