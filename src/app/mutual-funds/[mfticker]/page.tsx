"use client";
import TickerChart from '@/app/components/tickerchart';
import Image from 'next/image';
import { redirect, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { user, kyc } from '@/app/lib/utils/user';
import Link from 'next/link';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from '@/components/ui/progress';

const MFDetails = () => {

  const [tab, setTab] = useState("overview")
  const [dist, setDist] = useState("equity")
  const [peer, setPeer] = useState("returns")

  var mfticker = usePathname();
  mfticker = mfticker.split('/')[2].toUpperCase();

  // data = getStockData(mfticker);

  if (mfticker != "ABSLPSU") redirect('/not-found');
  var widthpercent = 20;

  return (
    <div className='flex flex-row gap-4 bg-gray-100 p-4 '>
      <div className=' flex flex-col gap-4 ml-48 w-[800px] '>
        <div className=' flex flex-col gap-2 w-full bg-white rounded-xl p-4 '>
          <div className=' flex flex-row justify-between '>
            <div className=' flex flex-row gap-3 '>
              <Image src={'/mfs/ab2.avif'} alt='abslpsu' width={50} height={30} className=' rounded-full ' />
              <div className=' flex flex-col gap-1 '>
                <p className=' font-semibold '>Aditya Birla Sun Life PSU Equity Fund Direct Growth</p>
                <div className=' flex flex-row gap-3 '>
                  <div className=' px-2 py-1 bg-gray-100 rounded-full text-sm '>Equity</div>
                  <div className=' px-2 py-1 bg-gray-100 rounded-full text-sm '>Direct</div>
                  <div className=' px-2 py-1 bg-gray-100 rounded-full text-sm '>Equity - Other</div>
                </div>
              </div>
            </div>
            <Link href={'/mutual-funds/compare'}>
              <div className=' flex flex-row gap-2 text-blue-400 '>
                <Image src={'/mfs/balance.avif'} alt='balance' width={22} height={10} />
                <p>Compare</p>
              </div>
            </Link>
          </div>
          <span className=' justify-between w-full pl-16 text-sm '><span className='font-semibold'>NAV:</span> ₹ 37.52 <span className='text-xs text-gray-500'>as on 29-05-2024</span></span>
        </div>
        <div className=" flex flex-row text-sm p-2 ">
          <button onClick={() => setTab("overview")} className={` font-semibold px-5 py-2 border-b-2 ${tab == "overview" ? 'text-blue-600 border-b-blue-600' : 'border-b-gray-400'} `}>Overview</button>
          <button onClick={() => setTab("distribution")} className={` font-semibold px-5 py-2 border-b-2  ${tab == "distribution" ? 'text-blue-600 border-b-blue-600' : 'border-b-gray-400'} `}>Distribution</button>
          <button onClick={() => setTab("peer")} className={` font-semibold px-5 py-2 border-b-2  ${tab == "peer" ? 'text-blue-600 border-b-blue-600' : 'border-b-gray-400'} `}>Peer Analysis</button>
        </div>
        {tab == "overview" && (
          <div className=' flex flex-col gap-2 w-full bg-white rounded-xl p-4 '>
            <p className=' font-semibold '>Overview</p>
            <div className=' flex flex-row gap-4 '>
              <div className=' flex flex-col gap-4 basis-1/2 '>
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/exp.png'} alt='expense' width={22} height={15} />
                    <p>Expense ratio</p>
                  </div>
                  <p>0.48%</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/aum.png'} alt='expense' width={22} height={15} />
                    <p>AUM</p>
                  </div>
                  <p>0.48%</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/lumpsum.png'} alt='expense' width={22} height={15} />
                    <p>Min Lumpsum/SIP</p>
                  </div>
                  <p>500/1000</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/lockin.png'} alt='expense' width={22} height={15} />
                    <p>Lock In</p>
                  </div>
                  <p>No Lock-in</p>
                </div>
                <hr />
              </div>
              <div className=' flex flex-col gap-4 basis-1/2 '>
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/benchmark.png'} alt='expense' width={22} height={15} />
                    <p>Benchmark</p>
                  </div>
                  <p>S&P BSE PSU TR INR</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/inception.png'} alt='expense' width={22} height={15} />
                    <p>Inception Date</p>
                  </div>
                  <p>DATE</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/exit.png'} alt='expense' width={22} height={15} />
                    <p>Exit Load&nbsp;
                      <HoverCard>
                        <HoverCardTrigger className=' text-xs font-extrabold '>ⓘ</HoverCardTrigger>
                        <HoverCardContent className=' text-xs bg-black text-white '>
                          Exit load of PER% if redeemed in 0-30 days.
                        </HoverCardContent>
                      </HoverCard>
                    </p>
                  </div>
                  <p>PER%</p>
                </div>
                <hr />
                <div className=' flex flex-row justify-between '>
                  <div className=' flex flex-row gap-2 '>
                    <Image src={'/mfs/turnover.png'} alt='expense' width={22} height={15} />
                    <p>TurnOver</p>
                  </div>
                  <p>PER%</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        )}
        {tab == "distribution" && (
          <div className=' flex flex-col gap-2 w-full bg-white rounded-xl p-4 '>
            <p className=' font-semibold '>Aditya Birla Sun Life PSU Equity Fund Direct Growth Distribution <span className=' text-xs font-semibold text-gray-500 '>as on (30-Apr-24)</span></p>
            <div className=' flex flex-col gap-3 p-2 '>
              <div className=' flex flex-row gap-0 w-full rounded-full border border-gray-200 '>
                <button onClick={() => setDist("equity")} className={` font-semibold px-8 py-2 rounded-full ${dist == "equity" ? 'text-white bg-blue-500' : 'text-black'} basis-1/2 `}>Equity PER%</button>
                <button onClick={() => setDist("debt")} className={` font-semibold px-8 py-2 rounded-full  ${dist == "debt" ? 'text-white bg-blue-500' : 'text-black'} basis-1/2 `}>Debt & Cash PER%</button>
              </div>
              {dist == "equity" && (
                <div className=' flex flex-col gap-5 p-2 '>
                  <p>Size Breakup</p>
                  <div className=' flex flex-row gap-0 w-full '>
                    <div className=' w-[60%] bg-[#4DA2FF] h-3 '>&nbsp;</div>
                    <div className=' w-[25%] bg-[#D08EAC] h-3 '>&nbsp;</div>
                    <div className=' w-[10%] bg-[#8781D9] h-3 '>&nbsp;</div>
                  </div>
                  <div className=' flex flex-row gap-8 w-[95%] '>
                    <div className=' basis-1/2 w-full flex flex-row justify-between '>
                      <div className=' flex flex-row gap-3 items-center '>
                        <div className=' bg-[#4DA2FF] w-3 h-4 '>&nbsp;</div>
                        <p>Large cap</p>
                      </div>
                      <p>PER%</p>
                    </div>
                    <div className=' basis-1/2 w-full flex flex-row justify-between '>
                      <div className=' flex flex-row gap-3 items-center '>
                        <div className=' bg-[#D08EAC] w-3 h-4 '>&nbsp;</div>
                        <p>Mid cap</p>
                      </div>
                      <p>PER%</p>
                    </div>
                  </div>
                  <div className=' basis-1/2 w-[45.5%] flex flex-row justify-between '>
                    <div className=' flex flex-row gap-3 items-center '>
                      <div className=' bg-[#8781D9] w-3 h-4 '>&nbsp;</div>
                      <p>Small cap</p>
                    </div>
                    <p>PER%</p>
                  </div>
                  <p>Sector Allocation</p>
                  <div className=' flex flex-row gap-3 '>
                    <div className=' flex flex-col gap-4 basis-1/2 '>
                      <div className=' flex flex-col gap-3 '>
                        <p>Financial Services</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={34.6} className=' h-2 ' />
                          <p className=' text-sm '>34.6%</p>
                        </div>
                      </div>
                      <div className=' flex flex-col gap-3 '>
                        <p>Energy</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={17.2} className=' h-2 ' />
                          <p className=' text-sm '>17.2%</p>
                        </div>
                      </div>
                      <div className=' flex flex-col gap-3 '>
                        <p>Basic Materials</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={6.2} className=' h-2 ' />
                          <p className=' text-sm '>6.2%</p>
                        </div>
                      </div>
                    </div>
                    <div className=' flex flex-col gap-4 basis-1/2 '>
                      <div className=' flex flex-col gap-3 '>
                        <p>Utilities</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={26} className=' h-2 ' />
                          <p className=' text-sm '>26%</p>
                        </div>
                      </div>
                      <div className=' flex flex-col gap-3 '>
                        <p>Industrial</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={16} className=' h-2 ' />
                          <p className=' text-sm '>16%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {dist == "debt" && (
                <div className=' flex flex-col gap-3 '>
                  <p>Sector Allocation</p>
                  <div className=' flex flex-row gap-3 '>
                    <div className=' flex flex-col gap-4 basis-1/2 '>
                      <div className=' flex flex-col gap-3 '>
                        <p>Cash Equivalent</p>
                        <div className=' flex flex-row gap-4 items-center '>
                          <Progress value={100} className=' h-2 ' />
                          <p className=' text-sm '>100%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {tab == "peer" && (
          <div className=' flex flex-col gap-2 w-full bg-white rounded-xl p-6 '>
            <p className=' font-semibold '>Peer Analysis</p>
            <div className=" flex flex-row text-sm border border-gray-200 rounded-full ">
              <button onClick={() => setPeer("returns")} className={` font-semibold px-8 py-2 rounded-full ${peer == "returns" ? 'text-white bg-blue-500' : 'text-black'} basis-1/3 `}>Returns %</button>
              <button onClick={() => setPeer("ratios")} className={` font-semibold px-8 py-2 rounded-full  ${peer == "ratios" ? 'text-white bg-blue-500' : 'text-black'} basis-1/3 `}>Fund Ratios</button>
              <button onClick={() => setPeer("overview")} className={` font-semibold px-8 py-2 rounded-full  ${peer == "overview" ? 'text-white bg-blue-500' : 'text-black'} basis-1/3 `}>Overview</button>
            </div>
            {peer == "returns" && (
              <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Funds</p>
                  <p>1Y Returns</p>
                  <p>3Y Returns</p>
                  <p>5Y Returns</p>
                  <p>Inception</p>
                </div>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                    <p>PER%</p>
                  </div>
                </Link>
              </div>
            )}
            {peer == "ratios" && (
              <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Funds</p>
                  <p>Sortino Ratio</p>
                  <p>Alpha Ratio</p>
                  <p>Info Ratio</p>
                  <p>Std dev</p>
                </div>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                    <p>RATIO</p>
                  </div>
                </Link>
              </div>
            )}
            {peer == "overview" && (
              <div className=' flex flex-col gap-2 '>
                <div className=' flex flex-row justify-between gap-3 bg-gray-100 text-gray-400 '>
                  <p>Funds</p>
                  <p>AUM</p>
                  <p>Expense Ratio</p>
                  <p>Inception Date</p>
                </div>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>XYZ Cr</p>
                    <p>PER%</p>
                    <p>DATE</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>XYZ Cr</p>
                    <p>PER%</p>
                    <p>DATE</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>XYZ Cr</p>
                    <p>PER%</p>
                    <p>DATE</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>XYZ Cr</p>
                    <p>PER%</p>
                    <p>DATE</p>
                  </div>
                </Link>
                <Link href={`/mutual-funds/${mfticker}`}>
                  <div className=' flex flex-row justify-between gap-3 '>
                    <div className=' flex flex-row gap-1 '>
                      <Image src={'/stocks/reliance.avif'} alt='stock' width={20} height={20} />
                      <p>MF NAME</p>
                    </div>
                    <p>XYZ Cr</p>
                    <p>PER%</p>
                    <p>DATE</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default MFDetails