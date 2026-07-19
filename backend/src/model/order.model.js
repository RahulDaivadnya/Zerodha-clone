import mongoose from "mongoose";


const orderSchema = new mongoose.Schema(
  {
    name: String,
    qty: Number,
    price: Number,
    mode:String,
  },
  {
    timestamps: true,
  },
);


const orderModel = mongoose.model("Order", orderSchema);


export default orderModel;