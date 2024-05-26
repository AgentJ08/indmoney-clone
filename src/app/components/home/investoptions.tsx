import React from 'react'
import IOCarousel from './iocarousel'

const InvestOptions = () => {
  return (
    <div className=' flex flex-col gap-6 items-center mt-8 h-full '>
      <p className=' font-bold text-5xl '>All-in-one App for Investing</p>
      <p className=' font-semibold text-sm text-gray-600 '>Invest in Indian Stocks, US Stocks, Direct Mutual Funds, and Fixed Deposits.<br />
                                                            Set up your financial goals and link them with your investments on INDmoney.</p>
      <IOCarousel />
    </div>
  )
}

export default InvestOptions