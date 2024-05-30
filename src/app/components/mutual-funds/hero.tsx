import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className=' flex flex-row w-full h-full bg-black text-white gap-16 p-8 '>
            <div className=' flex flex-col gap-8 items-start basis-3/5 ml-48 '>
                <p className=' font-bold text-6xl '>Mutual Funds</p>
                <p>Invest in Zero Commission Direct Plan Mutual Funds online. Easily switch to<br />
                    Direct Plans at no cost and manage SIPs with full control - edit, pause, or<br />
                    cancel anytime. All your SIPs are tracked on a single dashboard for<br />convenience.</p>
                <div className=' flex flex-col gap-2 '>
                    <div className=' flex flex-row gap-24 '>
                        <div className=' flex flex-row gap-1 '>
                            <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
                            <p className=' font-semibold '>Access to 5000+ AMCs</p>
                        </div>
                        <div className=' flex flex-row gap-1 '>
                            <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
                            <p className=' font-semibold '>Zero Commission Direct Plans</p>
                        </div>
                    </div>
                    <div className=' flex flex-row gap-28 '>
                        <div className=' flex flex-row gap-1 '>
                            <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
                            <p className=' font-semibold '>₹0 Maintenance Cost</p>
                        </div>
                        <div className=' flex flex-row gap-1 '>
                            <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
                            <p className=' font-semibold '>No Hidden Charges</p>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-row gap-6 items-center '>
                    <Link href={'/login'}><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Get Started</button></Link>
                    <Link href={'/articles/mututal-funds/how-to-invest-in-mutual-funds'}><button className=' text-blue-600 '>Learn More ➡</button></Link>
                </div>
            </div>
            <Image src={'/mfs/hero.avif'} alt='mf hero' width={325} height={400} className=' -ml-48 -mt-4 ' />
        </div>
    )
}

export default Hero