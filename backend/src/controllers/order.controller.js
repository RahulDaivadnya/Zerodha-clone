import orderModel from "../model/order.model.js";

const newOrder = async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    const response = await orderModel.create({
      name: name,
      qty: qty,
      price: price,
      mode: mode,
    });

    if(response){
        res.status(200).json({
            success: true,
            message: "Order placed successfully",
            order : response,
        })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


const getOrders = async (req, res) => {
  

  try {
    const response = await orderModel.find({});


    if(response){
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            orders : response,
        })
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};





export {newOrder,getOrders};
