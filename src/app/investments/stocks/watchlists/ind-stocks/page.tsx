"use client";
import AssetDialogBox from "@/app/components/investments/stocks/assetdialogbox";
import IndexCard from "@/app/components/stocks/indexcard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

    const [hide, setHide] = useState(false);
    const [watchlist, setWatchlist] = useState(1);

    return (
        <div className=" flex flex-col gap-8 bg-gray-100 ">
            <div className=" flex flex-row gap-8 ">
                <div className=" flex flex-col basis-6/12 items-start w-full text-white">
                    <div className=" flex flex-col bg-[#24345D] gap-3 border rounded-lg ml-48 mt-14 p-8 h-full w-[800px]">
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
                    <p className=" text-2xl  ">Live from the Market</p>
                    <div className=" flex flex-row gap-2 ">
                        <IndexCard ind="NIFTY 50" />
                        <IndexCard ind="SENSEX" />
                    </div>
                    <div className=" flex flex-row gap-2 ">
                        <IndexCard ind="BANK NIFTY" />
                        <IndexCard ind="NIFTY 100" />
                    </div>
                    <div className=" flex flex-row gap-2 ">
                        <IndexCard ind="NIFTY IT" />
                        <IndexCard ind="NIFTY Pharma" />
                    </div>
                </div>
            </div>
            <div className=" flex flex-row gap-8 text-sm ml-48 p-2 ">
                <Link href={'/investments/stocks'} className=" p-2 "><button>Invest</button></Link>
                <Link href={'/investments/stocks/portfolio/ind-stocks'} className=" p-2 "><button>My Stocks (INDstocks)</button></Link>
                <Link href={'/investments/stocks/orders/ind-stocks'} className=" p-2 "><button>Orders</button></Link>
                <Link href={'/investments/stocks/watchlists/ind-stocks'} className=" border-blue-500 border-b-2 p-2 text-blue-500 "><button>Watchlists</button></Link>
            </div>
            <div className=" ml-48 flex flex-row gap-4  ">
                <button onClick={() => setWatchlist(1)} className={` rounded-full ${watchlist == 1 ? 'bg-blue-400' : 'bg-white'} px-4 py-2 h-10 `}>My Watchlist 1</button>
                <button onClick={() => setWatchlist(2)} className={` rounded-full ${watchlist == 2 ? 'bg-blue-400' : 'bg-white'} px-4 py-2 h-10 `}>My Watchlist 2</button>
                <button onClick={() => setWatchlist(3)} className={` rounded-full ${watchlist == 3 ? 'bg-blue-400' : 'bg-white'} px-4 py-2 h-10 `}>My Watchlist 3</button>
                <button onClick={() => setWatchlist(4)} className={` rounded-full ${watchlist == 4 ? 'bg-blue-400' : 'bg-white'} px-4 py-2 h-10 `}>My Watchlist 4</button>
                <button onClick={() => setWatchlist(5)} className={` rounded-full ${watchlist == 5 ? 'bg-blue-400' : 'bg-white'} px-4 py-2 h-10 `}>My Watchlist 5</button>
            </div>
            {watchlist==1 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                        <p>Instrument</p>
                        <p>LTP</p>
                        <p>% Change</p>
                        <p>Abs. change</p>
                    </div>
                    <div className=" flex flex-row gap-4 justify-between ">
                        <p>Instrument1</p>
                        <p>LTP1</p>
                        <p>% Change1</p>
                        <p>Abs. change1</p>
                    </div>
                </div>
            )}
            {watchlist==2 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                        <p>Instrument</p>
                        <p>LTP</p>
                        <p>% Change</p>
                        <p>Abs. change</p>
                    </div>
                    <div className=" flex flex-row gap-4 justify-between ">
                        <p>Instrument2</p>
                        <p>LTP2</p>
                        <p>% Change2</p>
                        <p>Abs. change2</p>
                    </div>
                </div>
            )}
            {watchlist==3 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                        <p>Instrument</p>
                        <p>LTP</p>
                        <p>% Change</p>
                        <p>Abs. change</p>
                    </div>
                    <div className=" flex flex-row gap-4 justify-between ">
                        <p>Instrument3</p>
                        <p>LTP3</p>
                        <p>% Change3</p>
                        <p>Abs. change3</p>
                    </div>
                </div>
            )}
            {watchlist==4 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                        <p>Instrument</p>
                        <p>LTP</p>
                        <p>% Change</p>
                        <p>Abs. change</p>
                    </div>
                    <div className=" flex flex-row gap-4 justify-between ">
                        <p>Instrument4</p>
                        <p>LTP4</p>
                        <p>% Change4</p>
                        <p>Abs. change4</p>
                    </div>
                </div>
            )}
            {watchlist==5 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                        <p>Instrument</p>
                        <p>LTP</p>
                        <p>% Change</p>
                        <p>Abs. change</p>
                    </div>
                    <div className=" flex flex-row gap-4 justify-between ">
                        <p>Instrument5</p>
                        <p>LTP5</p>
                        <p>% Change5</p>
                        <p>Abs. change5</p>
                    </div>
                </div>
            )}
        </div>
    );
}
