import mongoose from "mongoose";


const positionSchema = new mongoose.Schema(
  {
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
  },
  {
    timestamps: true,
  },
);


const positionModel = mongoose.model("Position", positionSchema);


export default positionModel;