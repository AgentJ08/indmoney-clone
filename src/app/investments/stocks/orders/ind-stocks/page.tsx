"use client";
import AssetDialogBox from "@/app/components/investments/stocks/assetdialogbox";
import IndexCard from "@/app/components/stocks/indexcard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function Home() {

    const [hide, setHide] = useState(false);

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
                <Link href={'/investments/stocks/orders/ind-stocks'} className=" border-blue-500 border-b-2 p-2 text-blue-500 "><button>Orders</button></Link>
                <Link href={'/investments/stocks/watchlists/ind-stocks'} className=" p-2 "><button>Watchlists</button></Link>
            </div>
            <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
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
        </div>
    );
}
