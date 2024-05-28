"use client";
import React, { useState } from 'react'
import { HotCarousel, MostCarousel, TopGCarousel, TopLCarousel } from './allstockscarousels';

const StocksCarousel = () => {

    const [tab, setTab] = useState("hot");

    return (
        <div className=' flex flex-1 rounded-md shadow-md p-4 mt-4 ml-48 mr-32 '>
            <div className=' flex flex-col gap-2 p-2 '>
                <div className='flex flex-row gap-2 justify-start'>
                    <button onClick={() => setTab("hot")} className={` text-sm rounded-full px-3 py-1 ${tab=="hot" ? 'border text-blue-600 border-blue-600 bg-blue-50' : 'bg-gray-100'}  h-8 `}>Hot Stocks</button>
                    <button onClick={() => setTab("most")} className={` text-sm rounded-full px-3 py-1 ${tab=="most" ? 'border text-blue-600 border-blue-600 bg-blue-50' : 'bg-gray-100'}  h-8 `}>Most Traded</button>
                    <button onClick={() => setTab("topg")} className={` text-sm rounded-full px-3 py-1 ${tab=="topg" ? 'border text-blue-600 border-blue-600 bg-blue-50' : 'bg-gray-100'}  h-8 `}>Top Gainers</button>
                    <button onClick={() => setTab("topl")} className={` text-sm rounded-full px-3 py-1 ${tab=="topl" ? 'border text-blue-600 border-blue-600 bg-blue-50' : 'bg-gray-100'}  h-8 `}>Top Losers</button>
                </div>
                {tab=="hot" && <HotCarousel />}
                {tab=="most" && <MostCarousel />}
                {tab=="topg" && <TopGCarousel />}
                {tab=="topl" && <TopLCarousel />}
            </div>
        </div>
    )
}

export default StocksCarousel