"use client";
import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {

  const [user, setUser] = useState({kyc: '', name: '', gender: '', dob: '', pan: '', mobile: '', email: '' })

  useEffect(()=>{
    getUserDetails();
  }, [])

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setUser(res.data.data)
  }

  return (
    <div className=" flex flex-col gap-4 p-4 ">
      <p>Personal Details</p>
      <div className=" w-96 flex flex-col gap-4 p-3 bg-white rounded-2xl shadow-sm">
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">KYC</p>
          <p>{user.kyc}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">Full Name</p>
          <p>{user.name}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">Gender</p>
          <p>{user.gender}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">DOB</p>
          <p>{user.dob}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">PAN</p>
          <p>{user.pan}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">Mobile</p>
          <p>{user.mobile}</p>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          <p className=" text-sm text-gray-500 ">Email</p>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}
