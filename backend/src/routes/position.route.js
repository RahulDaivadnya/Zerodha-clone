

import express from "express";
import {getPositions} from "../controllers/position.controller.js";


const router = express.Router();


router.get("/positions",getPositions);

export default router;