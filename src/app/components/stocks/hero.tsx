import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' flex flex-row w-full h-full bg-black text-white gap-4 p-8 '>
      <div className=' flex flex-col gap-8 items-start basis-3/5 ml-32 '>
        <p className=' font-bold text-6xl '>Invest in share<br />market</p>
        <p>Invest in the Indian stock market with ease, choosing from stocks and ETFs,<br />
        and track daily gains or losses on a single dashboard. Manage your<br />investments flexibly with our unique SIP in Stocks feature.</p>
        <div className=' flex flex-col gap-2 '>
          <div className=' flex flex-row gap-24 '>
            <div className=' flex flex-row gap-1 '>
              <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
              <p className=' font-semibold '>5000+ stocks and 165+ ETFs</p>
            </div>
            <div className=' flex flex-row gap-1 '>
              <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
              <p className=' font-semibold '>Option to do SIP in Stocks</p>
            </div>
          </div>
          <div className=' flex flex-row gap-8 '>
            <div className=' flex flex-row gap-1 '>
              <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
              <p className=' font-semibold '>One Dashboard for Daily P&L Tracking</p>
            </div>
            <div className=' flex flex-row gap-1 '>
              <Image src={'/tick.avif'} alt='tick' width={25} height={25} />
              <p className=' font-semibold '>Strong Compliance with Financial Regulations</p>
            </div>
          </div>
        </div>
        <Link href={'/login'}><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Get Started</button></Link>
      </div>
      <div className=' flex flex-col gap-4 basis-2/5 '>
        <div className=' flex flex-row gap-3 '>
          <Link href={'/stocks/reliance'}><Image src={'/stocks/reliance.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/tcs'}><Image src={'/stocks/tcs.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/hdfcbank'}><Image src={'/stocks/hdfc.png'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/icicibank'}><Image src={'/stocks/icici.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/infy'}><Image src={'/stocks/infosys.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
        </div>
        <div className=' flex flex-row gap-3 '>
          <Link href={'/stocks/bhartiartl'}><Image src={'/stocks/airtel.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/sbin'}><Image src={'/stocks/sbi.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/lici'}><Image src={'/stocks/lic.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/hindunilvr'}><Image src={'/stocks/hul.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/itc'}><Image src={'/stocks/itc.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
        </div>
        <div className=' flex flex-row gap-3 '>
          <Link href={'/stocks/reliance'}><Image src={'/stocks/reliance.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/tcs'}><Image src={'/stocks/tcs.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/hdfcbank'}><Image src={'/stocks/hdfc.png'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/icicibank'}><Image src={'/stocks/icici.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/infy'}><Image src={'/stocks/infosys.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
        </div>
        <div className=' flex flex-row gap-3 '>
          <Link href={'/stocks/bhartiartl'}><Image src={'/stocks/airtel.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/sbin'}><Image src={'/stocks/sbi.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/lici'}><Image src={'/stocks/lic.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/hindunilvr'}><Image src={'/stocks/hul.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/itc'}><Image src={'/stocks/itc.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
        </div>
        <div className=' flex flex-row gap-3 '>
          <Link href={'/stocks/reliance'}><Image src={'/stocks/reliance.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/tcs'}><Image src={'/stocks/tcs.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/hdfcbank'}><Image src={'/stocks/hdfc.png'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/icicibank'}><Image src={'/stocks/icici.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
          <Link href={'/stocks/infy'}><Image src={'/stocks/infosys.avif'} alt='rel' width={60} height={60} className=' rounded-full hover:scale-110 ' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Hero