import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StartSIP = () => {
    return (
        <div className=' flex flex-row w-full h-full gap-16 p-8 '>
            <Image src={'/mfs/start-sip.avif'} alt='mf hero' width={450} height={400} className=' ml-32 ' />
            <div className=' flex flex-col gap-8 items-start basis-3/5 mt-16 '>
                <p className=' font-bold text-6xl '>Start a SIP in Mutual<br />Funds with just ₹50</p>
                <p className=' text-gray-600 '>Daily SIP | Weekly SIP | Monthly SIP | Quarterly SIP</p>
                <div className=' flex flex-row gap-6 items-center '>
                    <Link href={'/login'}><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Set up SIP</button></Link>
                    <Link href={'/mutual-funds/mutual-fund-sip-investment'}><button className=' text-blue-600 '>Explore SIP in Mutual Fund ➡</button></Link>
                </div>
            </div>
        </div>
    )
}

export default StartSIP