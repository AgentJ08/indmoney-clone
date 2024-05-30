"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const TrendingMFs = () => {

    const [currTab, setCurrtab] = useState("equity");

    var d = (new Date()).toString().split(' ');
    var today = d[2] + " " + d[1] + " " + d[3];

    return (
        <div className=' flex flex-col gap-6 items-center mt-12 h-full '>
            <p className=' font-bold text-5xl '>Trending Mutual Funds on {today}</p>
            <div className=' flex flex-row gap-4 '>
                <button onClick={(currTab) => setCurrtab("equity")} className={` rounded-full px-4 py-2 ${currTab == "equity" ? 'bg-blue-400' : 'bg-white'}`} >Best Equity Funds</button>
                <button onClick={(currTab) => setCurrtab("debt")} className={` rounded-full px-4 py-2 ${currTab == "debt" ? 'bg-blue-400' : 'bg-white'}`} >Best Debt Funds</button>
                <button onClick={(currTab) => setCurrtab("hybrid")} className={` rounded-full px-4 py-2 ${currTab == "hybrid" ? 'bg-blue-400' : 'bg-white'}`} >Best Hybrid Funds</button>
                <button onClick={(currTab) => setCurrtab("index")} className={` rounded-full px-4 py-2 ${currTab == "index" ? 'bg-blue-400' : 'bg-white'}`} >Best Index Funds</button>
                <button onClick={(currTab) => setCurrtab("gindex")} className={` rounded-full px-4 py-2 ${currTab == "gindex" ? 'bg-blue-400' : 'bg-white'}`} >Best Global Index Funds</button>
            </div>
            <div className=' w-[1200px] flex-col rounded-sm gap-4 '>
                {currTab == "equity" && (
                    <>
                        <div className=' flex flex-row font-semibold gap-4 items-center text-xs px-2 py-1'>
                            <div className=' basis-7/12 flex justify-start '>Fund Name</div>
                            <div className=' basis-1/12 flex justify-end '>Category</div>
                            <div className=' basis-1/12 flex justify-end '>3 Yrs Return</div>
                            <div className=' basis-1/12 flex justify-end '>Expense Ratio</div>
                            <div className=' basis-1/12 flex justify-end '>Fund Size (Cr)</div>
                            <div className=' basis-1/12 flex justify-center '></div>
                        </div>
                        <Link href={'/mutual-funds/ABSLPSU'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2'>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/ab.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>Aditya Birla Sun Life PSU Equity Fund Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Equity</div>
                                <div className=' basis-1/12 flex justify-end '>43.66%</div>
                                <div className=' basis-1/12 flex justify-end '>0.48%</div>
                                <div className=' basis-1/12 flex justify-end '>₹4115 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds/invesco-psu'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/invesco.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full '/>
                                        <p className=' text-sm text-gray-600 '>Invesco India PSU Equity Fund Direct Plan Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Equity</div>
                                <div className=' basis-1/12 flex justify-end '>42.63%</div>
                                <div className=' basis-1/12 flex justify-end '>0.93%</div>
                                <div className=' basis-1/12 flex justify-end '>₹957 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <div className=' flex justify-center my-4 text-blue-500 text-xs font-semibold '><Link href={'/mutual-funds/equity-funds'}><button>View all Equity Mutual Funds</button></Link></div>
                    </>
                )}
                {currTab == "debt" && (
                    <>
                        <div className=' flex flex-row font-semibold gap-4 items-center text-xs px-2 py-1'>
                            <div className=' basis-7/12 flex justify-start '>Fund Name</div>
                            <div className=' basis-1/12 flex justify-end '>Category</div>
                            <div className=' basis-1/12 flex justify-end '>1 Yr Return</div>
                            <div className=' basis-1/12 flex justify-end '>Expense Ratio</div>
                            <div className=' basis-1/12 flex justify-end '>Fund Size (Cr)</div>
                            <div className=' basis-1/12 flex justify-center '></div>
                        </div>
                        <Link href={'/mutual-funds/dsp-credit-risk'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/dsp.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>DSP Credit Risk Fund Direct Plan Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Debt</div>
                                <div className=' basis-1/12 flex justify-end '>16.09%</div>
                                <div className=' basis-1/12 flex justify-end '>0.40%</div>
                                <div className=' basis-1/12 flex justify-end '>₹194 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds/invesco-credit-risk'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/invesco.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>Invesco India Credit Risk Fund Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Debt</div>
                                <div className=' basis-1/12 flex justify-end '>9.21%</div>
                                <div className=' basis-1/12 flex justify-end '>0.28%</div>
                                <div className=' basis-1/12 flex justify-end '>₹139 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <div className=' flex justify-center my-4 text-blue-500 text-xs font-semibold '><Link href={'/mutual-funds/debt-funds'}><button>View all Debt Mutual Funds</button></Link></div>
                    </>
                )}
                {currTab == "hybrid" && (
                    <>
                        <div className=' flex flex-row font-semibold gap-4 items-center text-xs px-2 py-1'>
                            <div className=' basis-7/12 flex justify-start '>Fund Name</div>
                            <div className=' basis-1/12 flex justify-end '>Category</div>
                            <div className=' basis-1/12 flex justify-end '>3 Yrs Return</div>
                            <div className=' basis-1/12 flex justify-end '>Expense Ratio</div>
                            <div className=' basis-1/12 flex justify-end '>Fund Size (Cr)</div>
                            <div className=' basis-1/12 flex justify-center '></div>
                        </div>
                        <Link href={'/mutual-funds/icici-bharat-22'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/icici.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>ICICI Prudential Bharat 22 FOF Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Hybrid</div>
                                <div className=' basis-1/12 flex justify-end '>41.58%</div>
                                <div className=' basis-1/12 flex justify-end '>0.11%</div>
                                <div className=' basis-1/12 flex justify-end '>₹1179 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds/icici-retirement'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/icici.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>ICICI Prudential Retirement Fund Pure Equity Plan Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Hybrid</div>
                                <div className=' basis-1/12 flex justify-end '>32.67%</div>
                                <div className=' basis-1/12 flex justify-end '>0.70%</div>
                                <div className=' basis-1/12 flex justify-end '>₹730 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <div className=' flex justify-center my-4 text-blue-500 text-xs font-semibold '><Link href={'/mutual-funds/hybrid-funds'}><button>View all Hybrid Mutual Funds</button></Link></div>
                    </>
                )}
                {currTab == "index" && (
                    <>
                        <div className=' flex flex-row font-semibold gap-4 items-center text-xs px-2 py-1'>
                            <div className=' basis-7/12 flex justify-start '>Fund Name</div>
                            <div className=' basis-1/12 flex justify-end '>Category</div>
                            <div className=' basis-1/12 flex justify-end '>3 Yrs Return</div>
                            <div className=' basis-1/12 flex justify-end '>Expense Ratio</div>
                            <div className=' basis-1/12 flex justify-end '>Fund Size (Cr)</div>
                            <div className=' basis-1/12 flex justify-center '></div>
                        </div>
                        <Link href={'/mutual-funds/uti-nifty200'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/uti.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>UTI Nifty200 Momentum 30 Index Fund Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Index</div>
                                <div className=' basis-1/12 flex justify-end '>28.32%</div>
                                <div className=' basis-1/12 flex justify-end '>0.46%</div>
                                <div className=' basis-1/12 flex justify-end '>₹5496 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds/ab-midcap150'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/ab.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>Aditya Birla Sun Life Nitfy Midcap 150 Index Fund Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end '>Index</div>
                                <div className=' basis-1/12 flex justify-end '>27.35%</div>
                                <div className=' basis-1/12 flex justify-end '>0.45%</div>
                                <div className=' basis-1/12 flex justify-end '>₹184 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <div className=' flex justify-center my-4 text-blue-500 text-xs font-semibold '><Link href={'/mutual-funds/collection/nifty-index-funds'}><button>View all Index Mutual Funds</button></Link></div>
                    </>
                )}
                {currTab == "gindex" && (
                    <>
                        <div className=' flex flex-row font-semibold gap-4 items-center text-xs px-2 py-1'>
                            <div className=' basis-7/12 flex justify-start '>Fund Name</div>
                            <div className=' basis-1/12 flex justify-end '>Category</div>
                            <div className=' basis-1/12 flex justify-end '>1 Yr Return</div>
                            <div className=' basis-1/12 flex justify-end '>Expense Ratio</div>
                            <div className=' basis-1/12 flex justify-end '>Fund Size (Cr)</div>
                            <div className=' basis-1/12 flex justify-center '></div>
                        </div>
                        <Link href={'/mutual-funds/mirae-fang'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/mirae.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>Mirae Asset NYSE FANG+ ETF FoF Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end text-sm '>Global Index</div>
                                <div className=' basis-1/12 flex justify-end '>74.80%</div>
                                <div className=' basis-1/12 flex justify-end '>0.71%</div>
                                <div className=' basis-1/12 flex justify-end '>₹1570 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds/sbi-usequity'}>
                            <div className=' flex flex-row gap-4 border-b border-b-slate-500 hover:bg-slate-100 items-center p-2 '>
                                <div className=' basis-7/12 flex justify-start '>
                                    <div className=' flex flex-row gap-2 items-center '>
                                        <Image src={'/mfs/sbi.avif'} alt='ab-psu' width={40} height={20} className=' rounded-full ' />
                                        <p className=' text-sm text-gray-600 '>SBI International Access - US Equity FoF Direct Growth</p>
                                    </div>
                                </div>
                                <div className=' basis-1/12 flex justify-end text-sm '>Global Index</div>
                                <div className=' basis-1/12 flex justify-end '>41.17%</div>
                                <div className=' basis-1/12 flex justify-end '>0.90%</div>
                                <div className=' basis-1/12 flex justify-end '>₹866 Cr</div>
                                <div className=' basis-1/12 flex justify-center '><button className=' flex px-4 py-2 bg-[#288A3F] rounded-3xl hover:bg-[#1c662d] '>Invest</button></div>
                            </div>
                        </Link>
                        <div className=' flex justify-center my-4 text-blue-500 text-xs font-semibold '><Link href={'/mutual-funds/collection/global-index-funds'}><button>View all Global Index Mutual Funds</button></Link></div>
                    </>
                )}
            </div>
        </div>
    )
}

export default TrendingMFs