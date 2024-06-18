"use client";
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button';

const DashboardSidebar = () => {

    const [user, setUser] = useState({ kyc: '', name: '', gender: '', dob: '', pan: '', mobile: '', email: '' })
    const [sheetOpen, setSheetOpen] = useState(false);

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setUser(res.data.data)
    }
    var lastname = user.name.split(' ')[0];
    var avatarname = user.name.split(' ')[0][0]
    if (user.name.split(' ')[1]) {avatarname += user.name.split(' ')[1][0]; lastname = user.name.split(' ')[1];}

    const router = useRouter();

    const logout = async () => {
        try {
            await axios.post('/api/users/logout');
            setSheetOpen(false)
            router.push('/login')
            router.refresh()
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger><Image src={'/menu.png'} alt="Profile Menu" width={20} height={20} className=" ml-4 " /></SheetTrigger>
            <SheetContent className=' overflow-y-scroll max-h-screen text-sm '>
                <Link href="/profile/profile-details" onClick={() => setSheetOpen(false)}>
                    <div className=" -mt-6 -mx-6 p-8 bg-[#F5F5F8]  ">
                        <div className=" flex flex-row gap-2 p-4 hover:bg-white hover:shadow-sm ">
                            <div className=" flex basis-2/12 justify-center items-cente bg-gradient-to-r from-[#49D789] to-[#3C88EE] rounded-full p-4 text-white ">
                                {avatarname}
                            </div>
                            <div className=" flex basis-9/12 flex-col gap-1 px-3 justify-center ">
                                <p className=" text-sm font-semibold ">{user.name}</p>
                                <p className=" text-xs ">View Profile</p>
                            </div>
                            <div className=" flex basis-1/12 justify-center items-center text-blue-400 ">&gt;</div>
                        </div>
                    </div>
                </Link>
                <div className=' flex flex-col gap-2 bg-white w-full mt-6 '>
                    <div className=' flex flex-row gap-4 '>
                        <Image src={'/family.svg'} alt='family icon' width={20} height={20} />
                        <p className=' text-[#757779] '>My Family Members</p>
                    </div>
                    <div className=' pl-9 text-sm font-medium py-3 '>
                        <Link href={'/dashboard'} onClick={() => setSheetOpen(false)}>{user.name} (admin)</Link>
                    </div>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/dashboard.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>{lastname}&apos;s Family Dashboard</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/permission.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>My Permissions</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/report.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Tax Reports & Documents</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/preport.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Portfolio Reports</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/updates.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Market Updates</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/ind-assure.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>IND Assure</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/pricing.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Pricing</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/legal.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Legal</p>
                        </div>
                    </Link>
                    <Link href={'/calculator'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/calculator.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Calculators</p>
                        </div>
                    </Link>
                    <Link href={'#'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/help.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Need Help?</p>
                        </div>
                    </Link>
                    <Button onClick={() => logout()} >
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/logout.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#ff4646] '>Logout</p>
                        </div>
                    </Button>
                    <Link href={'/profile/delete-account'} onClick={() => setSheetOpen(false)}>
                        <div className=' flex flex-row gap-4 p-2 px-6 -mx-6 hover:bg-gray-100 '>
                            <Image src={'/delete.svg'} alt='dashboard icon' width={20} height={20} />
                            <p className=' text-[#757779] '>Delete Account</p>
                        </div>
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default DashboardSidebar