"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function ProfileLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const [user, setUser] = useState({ kyc: '', name: '', gender: '', dob: '', pan: '', mobile: '', email: '' })

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setUser(res.data.data)
    }
    var firstname = user.name.split(' ')[0];
    var avatarname = user.name.split(' ')[0][0]
    if(user.name.split(' ')[1]) avatarname += user.name.split(' ')[1][0]

    return (
        <div className=" flex flex-row ">
            <div className=" flex flex-col gap-3 basis-1/4 bg-gray-50 p-6 max-h-screen overflow-y-scroll">
                <div className="flex flex-row gap-3 p-2">
                    <div className=" flex justify-center items-center "><p className=" bg-purple-500 rounded-full p-4 text-xl text-white font-bold ">{avatarname}</p></div>
                    <div className=" flex flex-col gap-2 ">
                        <p className=" text-xl ">{firstname}'s Profile</p>
                        <p className=" text-green-500 "><span className=" bg-green-300 px-2 py-1 rounded-full text-white  ">✔</span> Profile Verified</p>
                    </div>
                </div>
                <hr />
                <Link href={'/profile/profile-details'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/profile.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">My INDmoney Profile</p>
                    </div>
                </Link>
                <hr />
                <Link href={'/profile/bank-details'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/bank.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Linked Bank Accounts</p>
                    </div>
                </Link>
                <hr />
                <Link href={'/profile/delete-account'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/delete.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Delete Account</p>
                    </div>
                </Link>
                <hr />
                <Link href={'#'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/placeholder.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Placeholder</p>
                    </div>
                </Link>
                <hr />
                <Link href={'#'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/placeholder.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Placeholder</p>
                    </div>
                </Link>
                <hr />
                <Link href={'#'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/placeholder.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Placeholder</p>
                    </div>
                </Link>
                <hr />
                <Link href={'#'}>
                    <div className="flex flex-row gap-4 py-6">
                        <div className=" flex justify-center items-center "><Image src={'/profile/placeholder.svg'} alt="profile" width={30} height={20} /></div>
                        <p className=" text-xl ">Placeholder</p>
                    </div>
                </Link>
            </div>
            <div className=" w-full bg-gray-100 ">
                {children}
            </div>
        </div>
    );
}
