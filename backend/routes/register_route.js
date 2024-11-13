import express from 'express';

import { register , regShow } from '../controllers/register_controller.js';

const router = express.Router();

router.post("/register",register);
router.get("/show/:regno",regShow);


export default router;