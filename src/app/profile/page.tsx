"use client";
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Page() {

    const router = useRouter()
    const [data, setData] = useState<string>("nothing")

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setData(res.data.data._id)
    }

    return (
        <div className=" flex flex-col gap-8 ">
            <p className=" text-xl font-bold ">Profile</p>
            <p className=" text-xl font-bold ">{data==="nothing" ? "Nothing": data}</p>
            <button onClick={getUserDetails}>Details</button>
        </div>
    );
}
