import { getDataFromToken } from "@/app/helper/getDataFromToken";
import connect from "../../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import Watchlist from "@/app/models/Watchlist";

connect()

export async function GET(request:NextRequest){
    try {
        const wlname = request.url.split('/')[6]
        const watchlist = await Watchlist.findOne({name: wlname})
        return NextResponse.json({
            message: "Watchlist found",
            data: watchlist
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}