"use client";
import TickerChart from '@/app/components/tickerchart';
import Image from 'next/image';
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import axios from 'axios';

const kyc = true;

const StockDetails = () => {

  const [tab, setTab] = useState("overview")
  const [comp, setComp] = useState("overview")
  const [stockData, setStockData] = useState({ name: '', ticker: '', currPrice: '', dayChange: '', dayLow: '', dayHigh: '', yearLow: '', yearHigh: '', oneMonthReturn: '', threeMonthReturn: '', oneYearReturn: '', fiveYearCAGR: '', prevClose: '', open: '', volume: '', marketCap: '', industry: '', pe: '' })
  const [user, setUser] = useState<boolean>(false)

  var ticker = usePathname();
  ticker = ticker.split('/')[2].toUpperCase();

  if (ticker != "RELIANCE") redirect('/not-found');

  useEffect(() => {
    const getStockData = async () => {
      const res = await axios.get(`/api/stocks/${ticker}`)
      setStockData(res.data.data)
    }

    const getUserDetails = async () => {
      const res = await axios.get('/api/users/auth')
      if (res.data.data.user) setUser(true);
      else setUser(false);
    }
    getStockData();
    getUserDetails();
  }, [user])



  var widthpercent = 20;

  return (
    <div className='flex flex-row gap-4 bg-gray-100 '>
      <div className=' flex flex-col gap-4 ml-48 w-[1000px] '>
        <TickerChart ticker={ticker} />
        <div className=" flex flex-row text-sm p-2 mt-8 ">
          <button onClick={() => setTab("overview")} className={` font-semibold px-5 py-2 border-b-2 ${tab == "overview" ? 'text-blue-600 border-b-blue-600' : 'border-b-gray-400'} `}>Overview</button>
          <button onClick={() => setTab("orders")} className={` font-semibold px-5 py-2 border-b-2  ${tab == "orders" ? 'text-blue-600 border-b-blue-600' : 'border-b-gray-400'} `}>Orders</button>
        </div>
        {tab == "overview" && (
          <div className=' flex flex-col gap-4 p-6 bg-white rounded-xl '>
            <p className=' font-semibold text-xl '>{stockData.name} Share Performance</p>
            <div className=' flex flex-col gap-1 '>
              <div className=' flex flex-row justify-between '>
                <p>LOW</p>
                <p>HIGH</p>
              </div>
              <div className=' flex flex-1 w-full bg-gradient-to-r from-red-400 to-green-700 h-[1px] text-[3px] rounded-full '>&nbsp;</div>
              <div className={` flex flex-col gap-0 ml-[${widthpercent}%] `}>
                <span className=' ml-4 '>▲</span>
                <span className=' ml-4 '>╵</span>
                <span className=' ml-4 '>╵</span>
                <span className=' text-gray-400 text-xs '>{stockData.currPrice}</span>
              </div>
            </div>
            <div className=' flex flex-row justify-between '>
              <div className=' flex flex-row gap-2 items-center '>
                <Image src={'/downward.png'} alt='down' width={20} height={20} />
                <p className=' font-semibold '>{stockData.dayLow}%</p>
                <p className=' text-xs text-gray-300 '>Low</p>
              </div>
              <div><p className=' text-gray-300 '>Day&apos;s Volatility: PER%</p></div>
              <div className=' flex flex-row gap-2 items-center '>
                <p className=' text-xs text-gray-300 '>High</p>
                <p className=' font-semibold '>{stockData.dayHigh}%</p>
                <Image src={'/upward.png'} alt='down' width={20} height={20} />
              </div>
            </div>
            <div className=' flex flex-row-reverse gap-6 '>
              <div className=' basis-1/2 flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between '>
                  <p className=' font-semibold '>Market Stats</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Previous Close</p>
                  <p>{stockData.prevClose}</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Open</p>
                  <p>{stockData.open}</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Volume</p>
                  <p>{stockData.volume}</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Upper Circuit</p>
                  <p>-</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Lower Circuit</p>
                  <p>-</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>Market Cap</p>
                  <p>{stockData.marketCap}</p>
                </div>
                <hr />
              </div>
              <div className=' basis-1/2 flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between '>
                  <p className=' font-semibold '>Returns %</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>1 Month Return</p>
                  <p>{stockData.oneMonthReturn}</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>3 Month Return</p>
                  <p>{stockData.threeMonthReturn}</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <p>1 Year Return</p>
                  <p>{stockData.oneYearReturn}</p>
                </div>
                <hr />
              </div>
            </div>
            <div className=" flex flex-row gap-8 text-sm ml-8 p-2 ">
              <button onClick={() => setComp("overview")} className={` font-semibold border-blue-400 px-4 py-2  ${comp == "overview" ? 'bg-blue-300 text-white' : 'text-blue-400'} `}>Overview</button>
              <button onClick={() => setComp("pe")} className={` font-semibold border-blue-400 px-4 py-2  ${comp == "pe" ? 'bg-blue-300 text-white' : 'text-blue-400'} `}>P/E</button>
              <button onClick={() => setComp("returnperc")} className={` font-semibold border-blue-400 px-4 py-2  ${comp == "returnperc" ? 'bg-blue-300 text-white' : 'text-blue-400'} `}>Return %</button>
            </div>
            {comp == "overview" && (
              <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Company</p>
                  <p>Market Cap</p>
                  <p>5 Year CAGR</p>
                </div>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>123 Cr</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>123 Cr</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>123 Cr</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>123 Cr</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>123 Cr</p>
                    <p>PER%</p>
                  </div>
                </Link>
              </div>
            )}
            {comp == "pe" && (
              <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Company</p>
                  <p>Mar 2023	</p>
                  <p>Mar 2022</p>
                  <p>Mar 2021</p>
                </div>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>PE</p>
                    <p>PE</p>
                    <p>PE</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>PE</p>
                    <p>PE</p>
                    <p>PE</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>PE</p>
                    <p>PE</p>
                    <p>PE</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>PE</p>
                    <p>PE</p>
                    <p>PE</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>PE</p>
                    <p>PE</p>
                    <p>PE</p>
                  </div>
                </Link>
              </div>
            )}
            {comp == "returnperc" && (
              <div className=' flex flex-col gap-0 text-xs '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Company</p>
                  <p>Alpha</p>
                  <p>Beta</p>
                  <p>1W</p>
                  <p>1M</p>
                  <p>3M</p>
                  <p>6M</p>
                  <p>1Y</p>
                  <p>3Y</p>
                  <p>5Y</p>
                </div>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>RET</p>
                    <p>RET</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>RET</p>
                    <p>RET</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>RET</p>
                    <p>RET</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>RET</p>
                    <p>RET</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/stocks/${ticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>STOCK NAME</p>
                    </div>
                    <p>RET</p>
                    <p>RET</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
        {tab == "orders" && (
          <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-8 p-8 ">
            <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
            <div className=" flex flex-row gap-4 justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
            <div className=" flex flex-row gap-4 justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
            <div className=" flex flex-row gap-4 justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
            <div className=" flex flex-row gap-4 justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
            <div className=" flex flex-row gap-4 justify-between ">
              <p>Instrument</p>
              <p>Trade Time</p>
              <p>Order ID</p>
              <p>Type</p>
              <p>Qty.</p>
              <p>Price</p>
            </div>
          </div>
        )}
      </div>
      {!user && (
        <div className=' flex flex-col p-4 gap-4 bg-white items-start '>
          <p className=' text-3xl '>Join INDmoney.com</p>
          <p>Manage all your money at one place.<br />
            Get start your investment journey with IND.</p>
          <div className='flex flex-col gap-2'>
            <div className=' flex flex-row gap-3 '>
              <Link href={'/stocks'}>
                <div className=' flex flex-row gap-2 '>
                  <Image src={'/accordionbox/indstocks.png'} alt='in' width={20} height={20} />
                  <p>IN Stocks</p>
                </div>
              </Link>
              <Link href={'/mutual-funds'}>
                <div className=' flex flex-row gap-2 '>
                  <Image src={'/accordionbox/mf.avif'} alt='in' width={20} height={20} />
                  <p>Mutual Fund</p>
                </div>
              </Link>
            </div>
          </div>
          <div className=' flex flex-row gap-3 '>
            <Link href={'/us-stocks'}>
              <div className=' flex flex-row gap-2 '>
                <Image src={'/accordionbox/usstocks.avif'} alt='in' width={20} height={20} />
                <p>US Stocks</p>
              </div>
            </Link>
            <Link href={'/fixed-deposit'}>
              <div className=' flex flex-row gap-2 '>
                <Image src={'/accordionbox/fd.avif'} alt='in' width={20} height={20} />
                <p>FD&apos;s</p>
              </div>
            </Link>
          </div>
          <div></div>
        </div>
      )}
      {user && !kyc && (
        <Image src={'/kyc.avif'} alt='kyc' width={200} height={100} />
      )}
    </div>
  )
}

export default StockDetails