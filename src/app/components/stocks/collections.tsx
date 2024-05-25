import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Collections = () => {
  return (
    <div className=' flex flex-col gap-4 ml-40 mt-8 '>
      <p className=' font-semibold text-lg '>Technical Stock Collections</p>
      <div className='flex flex-row gap-4 p-4'>
        <Link href={'/stocks/category/dma'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32'>
            <Image src={'/stocks/dma.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Stocks Above Daily</p>
              <p className=' text-sm font-semibold text-gray-500 '>Moving Average</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/rsi'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32'>
            <Image src={'/stocks/rsi.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>14 Day Relative</p>
              <p className=' text-sm font-semibold text-gray-500 '>Strength Index</p>
            </div>
          </div>
        </Link>
      </div>
      <p className=' font-semibold text-lg '>Theme Based Collections</p>
      <div className='flex flex-row gap-4 p-4'>
        <Link href={'/stocks/category/it-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/it.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>IT Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/banking-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/banking.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Banking Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/pharma-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/pharma.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Pharma Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/healthcare-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/healthcare.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Healthcare Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/index-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/index.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Index Stocks</p>
            </div>
          </div>
        </Link>
      </div>
      <p className=' font-semibold text-lg '>Stock Collections</p>
      <div className='flex flex-row gap-4 p-4 flex-wrap'>
      <Link href={'/stocks/category/sip-popular-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/sip.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>SIP Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/dividend-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/dividend.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Dividend Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/penny-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/penny.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Penny Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/high-return-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/highr.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>High Return Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/buy-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/buy.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Stocks in Buy</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/nifty-50-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/nifty50.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>India's Top 50 Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/sensex-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/sensex.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Sensex Stocks</p>
            </div>
          </div>
        </Link>
        <Link href={'/stocks/category/multibagger-stocks'}>
          <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-center hover:scale-95 px-4 py-6 w-48 h-32 '>
            <Image src={'/stocks/multibagger.avif'} alt='dma' width={40} height={40} />
            <div className=' flex flex-col gap-0 items-center '>
              <p className=' text-sm font-semibold text-gray-500 '>Multibagger Stocks</p>
            </div>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Collections