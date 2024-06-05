import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide name"],
        unique: true,
    },
    mfticker: {
        type: String,
        required: [true, "Please provide mfticker"],
        unique: true,
    },
    expenseRatio: {
        type: String,
        required: [true, "Please provide current price"]
    },
    aum: {
        type: String,
        required: [true, "Please provide day's change"]
    },
    minlumpsumsip: {
        type: String,
        required: [true, "Please provide day's low"]
    },
    lockin: {
        type: String,
        required: [true, "Please provide day's high"]
    },
    benchmark: {
        type: [String],
        required: [true, "Please provide year's high"]
    },
    inceptionDate: {
        type: String,
        required: [true, "Please provide 1 month's return"]
    },
    exitLoad: {
        type: String,
        required: [true, "Please provide 3 month's return"]
    },
    turnover: {
        type: String,
        required: [true, "Please provide 1 year's return"]
    },
    largecap: {
        type: String,
        required: [true, "Please provide 5 year CAGR"]
    },
    midcap: {
        type: String,
        required: [true, "Please provide last day's closing price"]
    },
    smallcap: {
        type: String,
        required: [true, "Please provide today's open price"]
    },
    finance: {
        type: String,
        required: [true, "Please provide trading volume"]
    },
    energy: {
        type: String,
        required: [true, "Please provide stock's marketcap"]
    },
    basicmaterials: {
        type: String,
        required: [true, "Please provide company's industry"]
    },
    utilities: {
        type: [String],
        required: [true, "Please provide company's PEs"]
    },
    industrial: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    oneyearreturns: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    threeyearreturns: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    fiveyearreturns: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    inceptionreturns: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    alpharatio: {
        type: String,
        required: [true, "Please provide company's PEs"]
    },
    industries: {
        type: [String],
        required: [true, "Please provide company's PEs"]
    },
}, { timestamps: true })

export default mongoose.models.Stock || mongoose.model("Stock", stockSchema);
