

import express from "express";
import {getHoldings} from "../controllers/holding.controller.js";

const router = express.Router();


router.get("/holdings",getHoldings);

export default router;