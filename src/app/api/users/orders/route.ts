import { getDataFromToken } from "@/app/helper/getDataFromToken";
import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import Order from "@/app/models/Order";

connect()

export async function GET(request:NextRequest){
    try {
        const userId = await getDataFromToken(request);
        const orders = await Order.find({userid: userId})
        return NextResponse.json({
            message: "All orders",
            data: orders
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}