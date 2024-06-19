import Link from 'next/link'
import React, { useState } from 'react'

const stocks = [
    { name: 'Reliance Industries', link: '/stocks/reliance' },
    { name: 'Tata Consultancy Services Ltd', link: '/stocks/tcs' },
    { name: 'HDFC Bank Ltd', link: '/stocks/hdfcbank' },
    { name: 'ICICI Bank Ltd', link: '/stocks/icicibank' },
    { name: 'Bharti Airtel Ltd', link: '/stocks/bhartiartl' },
    { name: 'State Bank of India', link: '/stocks/sbin' },
    { name: 'Life Insurance Corporation of India', link: '/stocks/lici' },
    { name: 'Infosys Ltd', link: '/stocks/infy' },
    { name: 'Hindustan Unilever Ltd', link: '/stocks/hindunilvr' },
    { name: 'ITC Ltd', link: '/stocks/itc' }
]

const mfs = [
    { name: 'Aditya Birla Sun Life PSU Equity Fund Direct Growth', link: '/mutual-funds/abslpsu' },
    { name: 'HDFC Balanced Advantage Fund Direct Plan Growth Option', link: '/mutual-funds/hdfcbaladv' },
    { name: 'ICICI Prudential Balanced Advantage Fund Direct Plan Growth', link: '/mutual-funds/icicibaladv' },
    { name: 'Kotak Balanced Advantage Fund Direct Growth', link: '/mutual-funds/kotakbaladv' },
    { name: 'Edelweiss Balanced Advantage Fund Direct Plan Growth', link: '/mutual-funds/edlbaladv' }
]

const quickLinks = [
    { name: 'My Profile Details', link: '/profile/profile-details' },
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'My Stocks', link: '/investments/stocks' },
    { name: 'My Mutual Funds', link: '/investments/mutual-funds' },
    { name: 'My Watchlists', link: '/watchlists' },
    { name: 'My Orders', link: '/orders' },
    { name: 'Calculator', link: '/calculators' },
    { name: 'Retirement Calculator', link: '/calculators/retirement-calculator' },
    { name: 'My Stock Portfolio', link: '/investments/stocks/portfolio' },
    { name: 'My Mutual Fund Portfolio', link: '/investments/mutual-funds/portfolio' }
]

const SearchResults = (props: { input: string }) => {

    const [type, setType] = useState('all');

    return (
        <div className=' flex flex-col w-96 bg-gray-100 mt-12 rounded-lg absolute p-2 '>
            <div className=' flex flex-row gap-4 bg-white justify-center w-full rounded-lg p-1 '>
                <button className={` border-b-2 p-2 ${type == 'all' ? 'text-blue-500 border-blue-500' : 'text-gray-400 border-gray-400'}`} onClick={() => { setType('all') }}>All</button>
                <button className={` border-b-2 p-2 ${type == 'stocks' ? 'text-blue-500 border-blue-500' : 'text-gray-400 border-gray-400'}`} onClick={() => { setType('stocks') }}>INDstocks</button>
                <button className={` border-b-2 p-2 ${type == 'mfs' ? 'text-blue-500 border-blue-500' : 'text-gray-400 border-gray-400'}`} onClick={() => { setType('mfs') }}>Mutual Funds</button>
            </div>
            {(type == 'stocks' || type == 'all') && props.input == '' && (
                <div className=' flex flex-col gap-4 mt-4 p-2 '>
                    <p className=' text-gray-500 '>Popular Searches</p>
                    <div className=' flex flex-row flex-wrap gap-3 '>
                        <Link href={'/stocks/reliance'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Reliance Industries</div>
                        </Link>
                        <Link href={'/stocks/tcs'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Tata Consultancy Services Ltd</div>
                        </Link>
                        <Link href={'/stocks/hdfcbank'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>HDFC Bank Ltd</div>
                        </Link>
                        <Link href={'/stocks/icicibank'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>ICICI Bank Ltd</div>
                        </Link>
                        <Link href={'/stocks/bhartiartl'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Bharti Airtel Ltd</div>
                        </Link>
                    </div>
                </div>
            )}
            {type == 'mfs' && props.input == '' && (
                <div className=' flex flex-col gap-4 mt-4 p-2 '>
                    <p className=' text-gray-500 '>Popular Searches</p>
                    <div className=' flex flex-row flex-wrap gap-3 '>
                        <Link href={'/mutual-funds/abslpsu'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Aditya Birla Sun Life PSU Equity Fund Direct Growth</div>
                        </Link>
                        <Link href={'/mutual-funds/hdfcbaladv'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>HDFC Balanced Advantage Fund Direct Plan Growth Option</div>
                        </Link>
                        <Link href={'/mutual-funds/icicibaladv'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>ICICI Prudential Balanced Advantage Fund Direct Plan Growth</div>
                        </Link>
                        <Link href={'/mutual-funds/kotakbaladv'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Kotak Balanced Advantage Fund Direct Growth</div>
                        </Link>
                        <Link href={'/mutual-funds/edlbaladv'}>
                            <div className=' bg-white text-sm px-6 py-2 rounded-full '>Edelweiss Balanced Advantage Fund Direct Plan Growth</div>
                        </Link>
                    </div>
                </div>
            )}
            {type == 'stocks' && props.input != '' && (
                <div className=' flex flex-col gap-4 mt-4 p-2 '>
                    {stocks.filter((stock) => { return stock.name.toLowerCase().includes(props.input.toLowerCase()) }).length > 0 && (
                        <>
                            <p className=' text-gray-500 '>INDstocks</p>
                            <div className=' flex flex-row flex-wrap gap-3 '>
                                {stocks.filter((stock) => { return stock.name.toLowerCase().includes(props.input.toLowerCase()) }).map((stock, index) =>
                                    <Link key={`stock-${index}`} href={stock.link}>
                                        <div className=' bg-white text-sm px-6 py-2 rounded-full '>{stock.name}</div>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
            {type == 'mfs' && props.input != '' && (
                <div className=' flex flex-col gap-4 mt-4 p-2 '>
                    {mfs.filter((mf) => { return mf.name.toLowerCase().includes(props.input.toLowerCase()) }).length > 0 && (
                        <>
                            <p className=' text-gray-500 '>Mutual Funds</p>
                            <div className=' flex flex-row flex-wrap gap-3 '>
                                {mfs.filter((mf) => { return mf.name.toLowerCase().includes(props.input.toLowerCase()) }).map((mf, index) =>
                                    <Link key={`mf-${index}`} href={mf.link}>
                                        <div className=' bg-white text-sm px-6 py-2 rounded-full '>{mf.name}</div>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
            {type == 'all' && props.input != '' && (
                <div className=' flex flex-col gap-4 mt-4 p-2 '>
                    {stocks.filter((stock) => { return stock.name.toLowerCase().includes(props.input.toLowerCase()) }).length > 0 && (
                        <>
                            <p className=' text-gray-500 '>INDstocks</p>
                            <div className=' flex flex-row flex-wrap gap-3 '>
                                {stocks.filter((stock) => { return stock.name.toLowerCase().includes(props.input.toLowerCase()) }).map((stock, index) =>
                                    <Link key={`stock-${index}`} href={stock.link}>
                                        <div className=' bg-white text-sm px-6 py-2 rounded-full '>{stock.name}</div>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                    {mfs.filter((mf) => { return mf.name.toLowerCase().includes(props.input.toLowerCase()) }).length > 0 && (
                        <>
                            <p className=' text-gray-500 '>Mutual Funds</p>
                            <div className=' flex flex-row flex-wrap gap-3 '>
                                {mfs.filter((mf) => { return mf.name.toLowerCase().includes(props.input.toLowerCase()) }).map((mf, index) =>
                                    <Link key={`mf-${index}`} href={mf.link}>
                                        <div className=' bg-white text-sm px-6 py-2 rounded-full '>{mf.name}</div>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                    {quickLinks.filter((quickLink) => { return quickLink.name.toLowerCase().includes(props.input.toLowerCase()) }).length > 0 && (
                        <>
                            <p className=' text-gray-500 '>Quick Links</p>
                            <div className=' flex flex-row flex-wrap gap-3 '>
                                {quickLinks.filter((quickLink) => { return quickLink.name.toLowerCase().includes(props.input.toLowerCase()) }).map((quickLink, index) =>
                                    <Link key={`quickLink-${index}`} href={quickLink.link}>
                                        <div className=' bg-white text-sm px-6 py-2 rounded-full '>{quickLink.name}</div>
                                    </Link>
                                )}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearchResults