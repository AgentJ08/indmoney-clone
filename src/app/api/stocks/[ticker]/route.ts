import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import Stock from "@/app/models/Stock";

connect()

export async function GET(request:NextRequest){
    try {
        const ticker = request.url.split('/')[5]
        const stockData = await Stock.findOne({ticker: ticker})
        console.log(stockData)
        return NextResponse.json({
            message: "User found",
            data: stockData
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}