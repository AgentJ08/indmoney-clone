"use client";
import AssetDialogBox from "@/app/components/investments/mutual-funds/assetdialogbox";
import Collections from "@/app/components/stocks/collections";
import IndexCard from "@/app/components/stocks/indexcard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator"
import StocksCarousel from "@/app/components/investments/stocks/stockscarousel";
import MFCollections from "@/app/components/investments/mutual-funds/mfcollections";


export default function Home() {

    const [hide, setHide] = useState(false);

    return (
        <div className=" flex flex-col gap-8 bg-gray-100 ">
            <div className=" flex flex-row gap-8 ">
                <div className=" flex flex-col basis-6/12 items-start w-full text-white h-72 ">
                    <div className=" flex flex-col bg-[#24345D] gap-3 border rounded-lg ml-48 mt-10 p-8 h-full w-[800px]">
                        <div className=" flex flex-row justify-between ">
                            <p>MY STOCKS</p>
                            {hide === true ? <button onClick={() => setHide(false)}><Image src={'/hide.png'} alt="hide" width={25} height={25} /></button> : <button onClick={() => setHide(true)}><Image src={'/eye.png'} alt="eye" width={25} height={25} /></button>}
                        </div>
                        <div className=" flex flex-row gap-3 text-2xl ">
                            {hide ? <p className=" text-gray-400 ">₹...</p> : <p>₹32.64k</p>}
                            {!hide && <AssetDialogBox />}
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className=" flex flex-col gap-3 pt-3 ">
                    <Link href={'/investments/mutual-funds/collection/trending-funds'}>
                        <div className=" flex flex-row gap-2 ">
                            <Image src={'/mfs/trend.png'} alt='dma' width={50} height={50} />
                            <div className=" flex flex-col gap-2 ">
                                <p>Invest in</p>
                                <p className=" font-semibold ">Trending Funds</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/investments/mutual-funds/collection/nifty-index-funds'}>
                        <div className=" flex flex-row gap-2 ">
                            <Image src={'/mfs/index.avif'} alt='dma' width={50} height={50} />
                            <div className=" flex flex-col gap-2 ">
                                <p>Invest in</p>
                                <p className=" font-semibold ">Index Funds</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/investments/mutual-funds/collection/high-return'}>
                        <div className=" flex flex-row gap-2 ">
                            <Image src={'/mfs/highreturn.png'} alt='dma' width={50} height={50} />
                            <div className=" flex flex-col gap-2 ">
                                <p>Invest in</p>
                                <p className=" font-semibold ">High Return Funds</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/investments/mutual-funds/collection/tax-saver'}>
                        <div className=" flex flex-row gap-2 ">
                            <Image src={'/mfs/taxsave.avif'} alt='dma' width={50} height={50} />
                            <div className=" flex flex-col gap-2 ">
                                <p>Invest in</p>
                                <p className=" font-semibold ">Tax Saver Funds</p>
                            </div>
                        </div>
                    </Link>
                    <Link href={'/investments/mutual-funds/collection/gold-funds'}>
                        <div className=" flex flex-row gap-2 ">
                            <Image src={'/mfs/gold.avif'} alt='dma' width={50} height={50} />
                            <div className=" flex flex-col gap-2 ">
                                <p>Invest in</p>
                                <p className=" font-semibold ">Gold Funds</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className=" flex flex-row gap-8 text-sm ml-48 p-2 ">
                <Link href={'/investments/mutual-funds'} className=" p-2 "><button>Explore & Invest</button></Link>
                <Link href={'/investments/mutual-funds/portfolio'} className=" border-blue-500 border-b-2 p-2 text-blue-500 "><button>My Mutual Funds</button></Link>
                <Link href={'/investments/mutual-funds/performance-summary'} className=" p-2 "><button>Performance Summary</button></Link>
                <Link href={'/investments/mutual-funds/orders'} className=" p-2 "><button>Transactions</button></Link>
            </div>
            <div className=" ml-48  "><button className=" rounded-full bg-blue-500 text-white px-4 py-2 h-10 ">My holdings</button></div>
            <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                    <p>Instrument</p>
                    <p>Qty.</p>
                    <p>Avg. Cost</p>
                    <p>LTP</p>
                    <p>Cur. Val</p>
                    <p>P&L</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
                <div className=" flex flex-row gap-4 justify-between ">
                    <p>Instrument</p>
                    <p>Qty.</p>
                    <p>Avg. Cost</p>
                    <p>LTP</p>
                    <p>Cur. Val</p>
                    <p>P&L</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
                <div className=" flex flex-row gap-4 justify-between ">
                    <p>Instrument</p>
                    <p>Qty.</p>
                    <p>Avg. Cost</p>
                    <p>LTP</p>
                    <p>Cur. Val</p>
                    <p>P&L</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
                <div className=" flex flex-row gap-4 justify-between ">
                    <p>Instrument</p>
                    <p>Qty.</p>
                    <p>Avg. Cost</p>
                    <p>LTP</p>
                    <p>Cur. Val</p>
                    <p>P&L</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
                <div className=" flex flex-row gap-4 justify-between ">
                    <p>Instrument</p>
                    <p>Qty.</p>
                    <p>Avg. Cost</p>
                    <p>LTP</p>
                    <p>Cur. Val</p>
                    <p>P&L</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
            </div>
        </div>
    );
}
