import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "Please provide watchlist name"],
    },
    ticker: {
        type: String,
        required: [true, "Please provide watchlist name"],
    },
    quantity: {
        type: Number,
        required: [true, "Please provide watchlist name"],
    },
    ordertype: {
        type: String,
        required: [true, "Please provide watchlist name"],
    },
    price: {
        type: String,
        required: [true, "Please provide watchlist name"],
    },
    tickertype: {
        type: String,
        required: [true, "Please provide watchlist name"],
    }
}, { timestamps: true })

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
