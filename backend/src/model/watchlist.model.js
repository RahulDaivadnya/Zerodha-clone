import mongoose from "mongoose";


const watchlistSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
  },
  {
    timestamps: true,
  },
);


const watchlistModel = mongoose.model("Watchlist", watchlistSchema);


export default watchlistModel;