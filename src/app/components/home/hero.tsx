import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' flex flex-col w-full h-fit bg-[#191C1F] text-white gap-8 p-16 items-center '>
        <p className=' font-semibold text-xl text-[#757779] '>All in One Super Money App</p>
        <p className=' font-bold text-6xl '>Take Control of Your Money</p>
        <p className=' font-semibold text-2xl '>Track, Plan & Invest on One App & Grow Your Net Worth</p>
        <Link href={'/signup'}><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] font-bold '>Open FREE Demat Account</button></Link>
        <Image src={'/home/hero.avif'} alt='home' width={400} height={500} />
    </div>
  )
}

export default Hero