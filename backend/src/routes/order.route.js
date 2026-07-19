import express from "express";
import {newOrder,getOrders} from "../controllers/order.controller.js";

const router = express.Router();


router.post("/newOrder",newOrder);
router.get("/orders",getOrders);


export default router;