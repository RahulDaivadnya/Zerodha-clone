import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

import holdingRoutes from "./routes/holding.route.js"
import positionRoutes from "./routes/position.route.js";
import orderRoutes from "./routes/order.route.js";




const app = express();



import cors from "cors";
app.use(cors());



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api", holdingRoutes);
app.use("/api", positionRoutes);
app.use("/api", orderRoutes);








export default app;
