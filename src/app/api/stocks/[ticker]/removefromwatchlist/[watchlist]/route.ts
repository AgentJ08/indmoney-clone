import connect from "../../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import Watchlist from "@/app/models/Watchlist";

connect()

export async function POST(request: NextRequest) {
    try {
        const ticker = request.url.split('/')[5]
        const watchlistname = request.url.split('/')[7]
        const newwatchlist = await Watchlist.updateOne(
            { name: watchlistname },
            { $pull: { stockTickers: ticker } },
        )
        return NextResponse.json({
            message: "Watchlist updated",
            data: newwatchlist
        })
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}