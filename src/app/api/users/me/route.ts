import { getDataFromToken } from "@/app/helper/getDataFromToken";
import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";

connect()

export async function GET(request: NextRequest) {
    try {

        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Find the user in the database based on the user ID
        if (userId) {
            const user = await User.findOne({ _id: userId }).
                select("-password");
            return NextResponse.json({
                message: "User found",
                data: user
            })
        }
        else {
            return NextResponse.json({
                message: "User found",
                data: null
            })
        }
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}