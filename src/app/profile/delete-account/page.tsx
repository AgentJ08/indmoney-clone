"use client";
import axios from "axios"
import { useEffect, useState } from "react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

    const [userid, setUserid] = useState('')

    const router = useRouter();

    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        setUserid(res.data.data._id)
    }

    const deleteUser = async () => {
        const res = await axios.post(`/api/users/deleteaccount`).
            then(async () => {
                await axios.post('/api/users/logout')
            }).
            then(() => { router.push('/') })
    }

    return (
        <div className=" flex flex-col gap-4 p-4 ">
            <p className=" text-xl font-semibold ">Do you want to delete your INDmoney account?</p>
            <p>By deleting your INDmoney account, you will not be able to track your investments and loans data on INDmoney.</p>
            <p>Do you want to proceed ahead with deletion of your account?</p>
            <div className=" flex flex-row gap-6 justify-start items-center">
                <AlertDialog >
                    <AlertDialogTrigger className=" bg-blue-600 text-white px-5 py-2 rounded-full ">Continue</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => { deleteUser() }}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <Link href={'/dashboard'}><button className=" text-blue-500 ">Go To Dashboard</button></Link>
            </div>
        </div>
    );
}
