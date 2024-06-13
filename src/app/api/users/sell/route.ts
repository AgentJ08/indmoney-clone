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
        const tickerBought = await Order.aggregate([{
            $match: {
                userid: userid,
                ticker: ticker,
                ordertype: 'buy'
            }
        }, {
            $group: {
                _id: null,
                total: {
                    $sum: "$quantity"
                }
            }
        }]);
        const tickerSold = await Order.aggregate([{
            $match: {
                userid: userid,
                ticker: ticker,
                ordertype: 'sell'
            }
        }, {
            $group: {
                _id: null,
                total: {
                    $sum: "$quantity"
                }
            }
        }]);
        console.log(tickerBought, tickerSold);
        const currHold = tickerBought[0].total - tickerSold[0].total;
        console.log(currHold)
        if (currHold < quantity) {
            return NextResponse.json({ error: `${ordertype.toUpperCase()} cannot be executed. You do not hold ${quantity} stocks of ${ticker} currently. You only hold ${currHold}.` }, { status: 500 })
        }
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