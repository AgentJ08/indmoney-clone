import { getDataFromToken } from "@/app/helper/getDataFromToken";
import connect from "../../../utils/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/User";
import Watchlist from "@/app/models/Watchlist";

connect()

export async function POST(request: NextRequest) {
    try {

        // Extract user ID from the authentication token
        const userId = await getDataFromToken(request);

        // Delete the user in the database based on the user ID
        const deluser = await User.deleteOne({ _id: userId })

        // Delete user watchlists
        const delwl = await Watchlist.deleteMany({ name: new RegExp(userId + '*.') })
        return NextResponse.json({
            message: "User and user data deleted",
            data: {
                user: deluser,
                wl: delwl
            }
        })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: error.message }, { status: 400 })
    }
}