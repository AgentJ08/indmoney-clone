"use client";
import AssetDialogBox from "@/app/components/investments/stocks/assetdialogbox";
import IndexCard from "@/app/components/stocks/indexcard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"


export default function Home() {

    const [hide, setHide] = useState(false);
    const [watchlist, setWatchlist] = useState(1);
    const [watchlist1, setWatchlist1] = useState({ name: '', stockTickers: [] })
    const [watchlist2, setWatchlist2] = useState({ name: '', stockTickers: [] })
    const [watchlist3, setWatchlist3] = useState({ name: '', stockTickers: [] })
    const [userid, setUserid] = useState<string>("")

    const router = useRouter();
    const { toast } = useToast()

    useEffect(() => {
        getUserId();
        getWatchlists();
    }, [userid])

    const getUserId = async () => {
        const res = await axios.get('/api/users/me')
        setUserid(res.data.data._id)
    }

    const getWatchlists = async () => {
        if (userid) {
            const res1 = await axios.get(`/api/users/watchlist/${userid}_wl1`)
            setWatchlist1(res1.data.data)
            const res2 = await axios.get(`/api/users/watchlist/${userid}_wl2`)
            setWatchlist2(res2.data.data)
            const res3 = await axios.get(`/api/users/watchlist/${userid}_wl3`)
            setWatchlist3(res3.data.data)
        }
    }

    const removefromwatchlist = async (ticker: any, num: any) => {
        const response = await axios.post(`/api/stocks/${ticker}/removefromwatchlist/${userid}_wl${num}`).
            then(() => { toast({ description: "Reomved from watchlist successfully" }) })
        router.refresh()
    }

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
            </div>
            {watchlist == 1 && (

                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <p className=" font-semibold text-xl ">{watchlist1.name}</p>
                    {watchlist1.stockTickers.map((ticker, i) => {
                        return (
                            <div key={i} className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                                <p>{ticker}</p>
                                <p>LTP</p>
                                <p>% Change</p>
                                <p>Abs. change</p>
                                <Button className=" rounded-full bg-gray-400 p-2 hover:bg-gray-500 " onClick={() => removefromwatchlist(ticker, 1)}>-</Button>
                            </div>
                        )
                    }
                    )}
                </div>
            )}
            {watchlist == 2 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <p className=" font-semibold text-xl ">{watchlist2.name}</p>
                    {watchlist2.stockTickers.map((ticker, i) => {
                        return (
                            <div key={i} className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                                <p>{ticker}</p>
                                <p>LTP</p>
                                <p>% Change</p>
                                <p>Abs. change</p>
                                <Button className=" rounded-full bg-gray-400 p-2 hover:bg-gray-500 " onClick={() => removefromwatchlist(ticker, 2)}>-</Button>
                            </div>
                        )
                    }
                    )}
                </div>
            )}
            {watchlist == 3 && (
                <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                    <p className=" font-semibold text-xl ">{watchlist3.name}</p>
                    {watchlist3.stockTickers.map((ticker, i) => {
                        return (
                            <div key={i} className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                                <p>{ticker}</p>
                                <p>LTP</p>
                                <p>% Change</p>
                                <p>Abs. change</p>
                                <Button className=" rounded-full bg-gray-400 p-2 hover:bg-gray-500 " onClick={() => removefromwatchlist(ticker, 3)}>-</Button>
                            </div>
                        )
                    }
                    )}
                </div>
            )}
        </div>
    );
}
