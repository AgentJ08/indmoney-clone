import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        unique: true,
    },
    ticker: {
        type: String,
        required: [true, "Please provide ticker"],
        unique: true,
    },
    currPrice: {
        type: String,
        required: [true, "Please provide current price"]
    },
    dayChange: {
        type: String,
        required: [true, "Please provide day's change"]
    },
    dayLow: {
        type: String,
        required: [true, "Please provide day's low"]
    },
    dayHigh: {
        type: String,
        required: [true, "Please provide day's high"]
    },
    yearLow: {
        type: String,
        required: [true, "Please provide year's low"]
    },
    yearHigh: {
        type: String,
        required: [true, "Please provide year's high"]
    },
    oneMonthReturn: {
        type: String,
        required: [true, "Please provide 1 month's return"]
    },
    threeMonthReturn: {
        type: String,
        required: [true, "Please provide 3 month's return"]
    },
    oneYearReturn: {
        type: String,
        required: [true, "Please provide 1 year's return"]
    },
    fiveYearCAGR: {
        type: String,
        required: [true, "Please provide 5 year CAGR"]
    },
    prevClose: {
        type: String,
        required: [true, "Please provide last day's closing price"]
    },
    open: {
        type: String,
        required: [true, "Please provide today's open price"]
    },
    volume: {
        type: String,
        required: [true, "Please provide trading volume"]
    },
    marketCap: {
        type: String,
        required: [true, "Please provide stock's marketcap"]
    },
    industry: {
        type: String,
        required: [true, "Please provide company's industry"]
    },
    pe: {
        type: [String],
        required: [true, "Please provide company's PEs"]
    },
}, { timestamps: true })

export default mongoose.models.Stock || mongoose.model("Stock", stockSchema);
