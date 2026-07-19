import holdingModel from "../model/holding.model.js";

const getHoldings = async (req, res) => {
  try {
    let holdings = await holdingModel.find({});

    if (holdings) {
      res.status(200).json({
        success: true,
        holdings : holdings,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getHoldings };