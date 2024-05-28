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
      </div>
      <div className=" flex flex-row gap-8 text-sm ml-48 p-2 ">
        <Link href={'/investments/mutual-funds'} className=" border-blue-500 border-b-2 p-2 text-blue-500 "><button>Explore & Invest</button></Link>
        <Link href={'/investments/mutual-funds/portfolio'} className=" p-2 "><button>My Mutual Funds</button></Link>
        <Link href={'/investments/mutual-funds/performance-summary'} className=" p-2 "><button>Performance Summary</button></Link>
        <Link href={'/investments/mutual-funds/orders'} className=" p-2 "><button>Transactions</button></Link>
      </div>
      <MFCollections />
      <Link href={'/mutual-funds/collection'}><div className=" flex justify-center p-8 "><button className=' px-8 py-2 font-bold text-white bg-blue-600 hover:scale-105 rounded-full '>Explore all Mutual Funds</button></div></Link>
    </div>
  );
}
