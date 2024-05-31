import { getUserIdFromToken } from "../../../helper/getUserIdFromToken";
import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

connect()

export async function GET(request:NextRequest){
    try {

        const userId = await getUserIdFromToken(request);

        if(!userId) return NextResponse.json({
            message: "User is not logged in",
            data: {
                user: false
            }
        })
        return NextResponse.json({
            message: "User is logged in",
            data: {
                user: true
            }
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}