import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OpenAccount = () => {
    return (
        <div className=' flex flex-row w-full h-full gap-16 p-8 bg-[#191C1F] text-white '>
            <div className=' flex flex-col gap-8 items-start basis-3/5 mt-16 pl-48 '>
                <p className=' font-bold text-6xl '>Zero* Cost Trading<br />Account</p>
                <p className=' text-[#a5a6a7] '>Open a Demat account for Free*. Start investing in Stocks, ETFs & Mutual<br />Funds.</p>
                <div className=' flex flex-row gap-6 items-center '>
                    <Link href={'/signup'}><button className=' flex px-6 py-4 bg-[#288A3F] rounded-full hover:bg-[#1c662d] '>Open FREE INDstocks A/c</button></Link>
                    <Link href={'/signup'}><button className=' text-blue-600 '>Process to Open Account ➡</button></Link>
                </div>
            </div>
            <Image src={'/home/zero-cost.avif'} alt='mf hero' width={500} height={400} className=' flex items-center basis-2/5 -ml-8 ' />
        </div>
    )
}

export default OpenAccount