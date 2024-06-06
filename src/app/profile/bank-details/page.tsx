"use client";
import axios from "axios"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function Home() {

    const [user, setUser] = useState({ kyc: '', name: '', gender: '', dob: '', pan: '', mobile: '', email: '' })

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setUser(res.data.data)
    }

    return (
        <div className=" flex flex-col gap-4 p-4 ">
            <p className=" font-semibold text-xl ">Linked Payment Methods</p>
            <div>
                <p>Linked Bank Accounts</p>
                <div className=" w-96 flex flex-col gap-4 p-3 bg-white rounded-2xl shadow-sm">
                    <Link href={'#'}>
                        <div className=" flex flex-row justify-between ">
                            <div className=" flex flex-row gap-2 ">
                                <Image src={'/profile/ind.webp'} alt="ind" width={15} height={15} />
                                <p>Mutual Funds A/c</p>
                            </div>
                            <p>&gt;</p>
                        </div>
                    </Link>
                    <Link href={'#'}>
                        <div className=" flex flex-row justify-between ">
                            <div className=" flex flex-row gap-2 ">
                                <Image src={'/profile/ind.webp'} alt="ind" width={15} height={15} />
                                <p>US Stocks A/c</p>
                            </div>
                            <p>&gt;</p>
                        </div>
                    </Link>
                    <Link href={'#'}>
                        <div className=" flex flex-row justify-between ">
                            <div className=" flex flex-row gap-2 ">
                                <Image src={'/profile/ind.webp'} alt="ind" width={15} height={15} />
                                <p>Other Accounts</p>
                            </div>
                            <p>&gt;</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <p>Other Saved Methods</p>
                <div className=" w-96 flex flex-col gap-4 p-3 bg-white rounded-2xl shadow-sm">
                    <Link href={'#'}>
                        <div className=" flex flex-row justify-between ">
                            <div className=" flex flex-row gap-2 ">
                                <Image src={'/profile/upi.webp'} alt="ind" width={15} height={15} />
                                <p>Saved UPI IDs</p>
                            </div>
                            <p>&gt;</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
