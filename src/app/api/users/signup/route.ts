import connect  from "../../../utils/db";
import User from "../../../models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import Watchlist from "@/app/models/Watchlist";


connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {name, email, password} = reqBody
        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()

        const newuserId = savedUser.id
        var watchlistName1 = newuserId+'_wl1'

        const newWatchlist1 = new Watchlist({
            watchlistName1,
        })

        const savedWatchlist1 = await newWatchlist1.save()

        var watchlistName2 = newuserId+'_wl2'

        const newWatchlist2 = new Watchlist({
            watchlistName2,
        })

        const savedWatchlist2 = await newWatchlist2.save()

        var watchlistName3 = newuserId+'_wl3'

        const newWatchlist3 = new Watchlist({
            watchlistName3,
        })

        const savedWatchlist3 = await newWatchlist3.save()


        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}