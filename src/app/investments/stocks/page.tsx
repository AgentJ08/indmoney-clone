"use client";
import AssetDialogBox from "@/app/components/investments/stocks/assetdialogbox";
import Collections from "@/app/components/stocks/collections";
import IndexCard from "@/app/components/stocks/indexcard";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator"
import StocksCarousel from "@/app/components/investments/stocks/stockscarousel";


export default function Home() {

  const [hide, setHide] = useState(false);

  return (
    <div className=" flex flex-col gap-8 ">
      <div className=" flex flex-row gap-8 ">
        <div className=" flex flex-col basis-6/12 items-start w-full text-white">
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
        <div className=" flex flex-col gap-3 rounded-lg shadow-md ">
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
        <Link href={'/investments/stocks'} className=" border-blue-500 border-b-2 p-2 text-blue-500 "><button>Invest</button></Link>
        <Link href={'/investments/stocks/portfolio/ind-stocks'} className=" p-2 "><button>My Stocks (INDstocks)</button></Link>
        <Link href={'/investments/stocks/orders/ind-stocks'} className=" p-2 "><button>Orders</button></Link>
        <Link href={'/investments/stocks/watchlists/ind-stocks'} className=" p-2 "><button>Watchlists</button></Link>
      </div>
      <Separator className=" -my-6 " />
      <StocksCarousel />
      <Collections />
    </div>
  );
}
