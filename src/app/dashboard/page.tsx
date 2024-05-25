"use client";
import Image from "next/image";
import { useState } from "react";
import AssetDialogBox from "../components/assetdialogbox";
import AccordianBox from "../components/accordionbox";
import { Progress } from "@/components/ui/progress"
import Link from "next/link";


export default function Page() {

  const [hide, setHide] = useState(false);

  return (
    <div className=" w-full h-full bg-[#F5F5F8] flex flex-row gap-6 my-2 ">
      <div className=" flex flex-col basis-6/12 items-start w-full text-white">
        <div className=" flex flex-col bg-[#24345D] gap-3 border rounded-lg ml-48 mt-10 p-8 h-48 w-[800px]">
          <div className=" flex flex-row justify-between ">
            <p>MY ASSETS</p>
            {hide === true ? <button onClick={(hide) => setHide(false)}><Image src={'/hide.png'} alt="hide" width={25} height={25} /></button> : <button onClick={(hide) => setHide(true)}><Image src={'/eye.png'} alt="eye" width={25} height={25} /></button>}
          </div>
          <div className=" flex flex-row gap-3 text-2xl ">
            {hide ? <p className=" text-gray-400 ">₹...</p> : <p>₹32.64k</p>}
            {!hide && <AssetDialogBox />}
          </div>
          <div></div>
        </div>
        <div className=" flex flex-col bg-white gap-10 border rounded-lg ml-48 mt-10 p-8 h-fit w-[800px] text-black">
          <div className="  "><button className=" bg-blue-100 text-blue-600 rounded-lg px-3 py-1 ">Assets</button></div>
          <Link href={'/investments/stocks'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/accordionbox/indstocks.png'} alt="indstocks" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">INDstocks</p>
                  <Progress value={100} className=" max-h-2 " />
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                {hide && <p className=" font-bold text-gray-500 ">₹...</p>}
                {!hide && <p className=" font-semibold ">₹32.64k</p>}
                <p>100%</p>
              </div>
            </div>
          </Link>
          <Link href={'/investments/us-stocks'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/accordionbox/usstocks.avif'} alt="us stocks" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">US Stocks</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/mutual-funds'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/accordionbox/mf.avif'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">Mutual Funds</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/nps'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/nps.webp'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">NPS</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/fixed-deposits'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/fd.webp'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">FD</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/epf'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/epf.webp'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">EPF</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/bonds'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/bonds.png'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">Bonds</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/ppf'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/ppf.webp'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">PPF</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/aif'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/aif.webp'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">AIF</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/gold'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/gold.png'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">Gold</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/esops-and-rsus'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/esop.avif'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">ESOPs/RSUs</p>
                </div>
              </div>
              <div className=" flex flex-col gap-1 items-end text-xs ">
                <Image src={'/plus.webp'} alt="plus" width={25} height={25} />
              </div>
            </div>
          </Link>
          <Link href={'/investments/add-investment'}>
            <div className=" flex flex-row justify-between items-center ">
              <div className="flex flex-row gap-2">
                <Image src={'/add.png'} alt="mf" width={25} height={25} />
                <div className=" flex flex-col gap-1 ">
                  <p className=" text-sm ">Add</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" h-24 "></div>
      </div>
      <div className=" flex flex-col basis-1/3 justify-start gap-12 max-w-96 ">
        <Image src={'/hubinsurance.webp'} alt="insurance" width={400} height={800} className=" mt-10 " />
        <div className=" bg-white p-4 rounded-xl ">
          <AccordianBox />
        </div>
      </div>
      <div className=" fixed bottom-2 left-[93%] w-full ">
        <Link href={'/help'}>
          <button className=" text-blue-600 border border-blue-600 rounded-3xl p-1 bg-white">
            <div className=" flex flex-row ">
              <Image src={'/question.png'} alt="question" width={25} height={15} />
              <p>Get help</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}