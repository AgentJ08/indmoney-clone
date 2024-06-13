import { getDataFromToken } from "@/app/helper/getDataFromToken";
import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import Order from "@/app/models/Order";

connect()

export async function POST(request: NextRequest) {
    try {
        const userid = await getDataFromToken(request);
        const reqBody = await request.json();
        const { ticker, quantity, ordertype, price, tickertype } = reqBody;
        const newOrder = new Order({
             userid,
             ticker,
             quantity,
             ordertype,
             price,
             tickertype
        })

        const savedOrder = await newOrder.save()
        return NextResponse.json({
            message: `${ordertype.toUpperCase()} Order Executed`,
            data: savedOrder
        })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}