import express from 'express'

// controllers
import {printid , printcertificate} from '../controllers/provider_controller.js'


const router = express.Router();

router.get("/printid/:regno" , printid)
router.get("/printcertificate/:regno",printcertificate)


export default router;