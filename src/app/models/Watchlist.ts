import mongoose from "mongoose";

const watchlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide watchlist name"],
    },
    stockTickers: {
        type: [String],
        required: [true, "Please provide all stock tickers"],
        default: [],
    },
    
}, { timestamps: true })

export default mongoose.models.Watchlist || mongoose.model("Watchlist", watchlistSchema);
