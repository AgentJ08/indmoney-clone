import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MFCollections = () => {
    return (
        <div className=' flex flex-col gap-4 ml-40 mt-8 w-[1200px] '>
            <p className=' font-semibold text-lg '>Collections</p>
            <div className='flex flex-row gap-4 justify-between flex-wrap'>
                <Link href={'/investments/mutual-funds/collection/trending-funds'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32'>
                        <Image src={'/mfs/trend.png'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Trending Funds</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>25% - 27%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/investments/mutual-funds/collection/index-funds'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32'>
                        <Image src={'/mfs/index.avif'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Index Funds</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>18% - 20%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/stocks/category/high-return'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32'>
                        <Image src={'/mfs/highreturn.png'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>High Return</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>34% - 36%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/investments/mutual-funds/collection/tax-saver'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32'>
                        <Image src={'/mfs/taxsave.avif'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Tax Saver</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>23% - 25%</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-row gap-4 justify-between '>
                <Link href={'/investments/mutual-funds/collection/build-wealth'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32 -ml-4'>
                        <Image src={'/mfs/build.avif'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Build Wealth</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>32% - 34%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/investments/mutual-funds/collection/gold-funds'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32'>
                        <Image src={'/mfs/gold.avif'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Gold Funds</p>
                            <p className=' text-xs text-gray-500 '>3 Yr Returns</p>
                            <p className=' text-xs font-semibold text-green-500 '>12% - 14%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/investments/mutual-funds/collection/best-mutual-funds'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32 pl-16'>
                        <Image src={'/mfs/trend.png'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Best Mutual Funds</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/investments/mutual-funds/collection/best-sip-mutual-funds'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32 pl-24'>
                        <Image src={'/mfs/highreturn.png'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Best SIP Mutual Funds</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='flex flex-row gap-4 justify-between '>
                <Link href={'/investments/mutual-funds/collection/best-sip-plan-for-5-years'}>
                    <div className=' flex flex-row gap-2 justify-center items-center w-56 h-32 pl-10'>
                        <Image src={'/mfs/highreturn.png'} alt='dma' width={60} height={60} />
                        <div className=' flex flex-col gap-1 items-start '>
                            <p className=' text-xs '>Invest in</p>
                            <p className=' text-base text-nowrap font-semibold text-gray-500 '>Best 5 Year SIP Plans</p>
                        </div>
                    </div>
                </Link>
            </div>
            <p className=' font-semibold text-lg '>Index Funds</p>
            <div className='flex flex-row gap-4 p-4 flex-wrap'>
                <Link href={'/mutual-funds/collection/best-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/index2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Best Index Funds</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>18%-20%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/nifty-50-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/nifty50.png'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Nifty 50</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>15%-17%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/nifty-next-50-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/index2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Nifty Next 50</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>22%-24%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/nifty-smallcap-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/index2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Nifty Smallcap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>30%-31%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/nifty-midcap-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/index2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Nifty midcap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>24%-26%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/global-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/global.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Global Index Funds</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>12%-14%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/other-index-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/index2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Others</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>15%-17%</p>
                        </div>
                    </div>
                </Link>
            </div>
            <p className=' font-semibold text-lg '>Top Equity Funds</p>
            <div className='flex flex-row gap-4 p-4 flex-wrap'>
                <Link href={'/mutual-funds/collection/best-flexi-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/flexi.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Flexi Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>20%-22%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-focused-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/focused.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Focused Funds</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>21%-23%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-large-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/largecap.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Large Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>19%-21%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-large-mid-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/largemidcap.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Large & Mid Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>24%-26%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-mid-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/midcap.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Mid Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>28%-30%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-small-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/global.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Small Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>29%-31%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-multi-cap-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/multicap.png'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Multi-Cap</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>25%-27%</p>
                        </div>
                    </div>
                </Link>
            </div>
            <p className=' font-semibold text-lg '>Top Debt Funds</p>
            <div className='flex flex-row gap-4 p-4 flex-wrap'>
                <Link href={'/mutual-funds/collection/best-liquid-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/liquid.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Liquid Funds</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-bank-and-psu-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/bank.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Bank & PSU</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-corporate-bond-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/corp.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Corp Bond</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-short-duration-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/shortterm.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Short Duration</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>6%-7%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-medium-to-long-term-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/medtolong.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Med to Long</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-low-duration-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/lowterm.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Low Duration</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-money-market-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/moneymarket.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Money Market</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>5%-6%</p>
                        </div>
                    </div>
                </Link>
            </div>
            <p className=' font-semibold text-lg '>Top Hybrid Funds</p>
            <div className='flex flex-row gap-4 p-4 flex-wrap'>
                <Link href={'/mutual-funds/collection/best-aggresive-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/aggressive.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Aggressive</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>17%-19%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-arbitrage-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/arbitrage.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Arbitrage</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>6%-7%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-conservative-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/conservative.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Conservative</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>9%-11%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-balanced-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/balanced.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Balanced</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>12%-14%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-equity-savings-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/equitysavings.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Equity Savings</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>10%-12%</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/collection/best-muti-asset-funds'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/multiasset.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Multi Asset</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>3 Yr Returns </p>
                            <p className=' text-sm  text-green-500 '>18%-20%</p>
                        </div>
                    </div>
                </Link>
            </div>
            <p className=' font-semibold text-lg '>Most Popular Fund Houses</p>
            <div className='flex flex-row gap-4 p-4 flex-wrap'>
                <Link href={'/mutual-funds/amc/icici'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/icici2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>ICICI</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>7.08L Cr</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/amc/hdfc'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/hdfc2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>HDFC</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>6.69L Cr</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/amc/sbi'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/sbi2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>SBI</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>6.59L Cr</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/amc/kotak'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/kotak2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Kotak</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>4.00L Cr</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/amc/nippon'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/nippon2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Nippon</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>3.51L Cr</p>
                        </div>
                    </div>
                </Link>
                <Link href={'/mutual-funds/amc/aditya-birla'}>
                    <div className=' flex flex-col gap-2 bg-white rounded-lg border justify-center items-start hover:scale-95 px-4 py-6 w-44 h-40'>
                        <Image src={'/mfs/ab2.avif'} alt='dma' width={40} height={40} />
                        <p className=' font-semibold '>Aditya Birla Sun Life</p>
                        <div className=' flex flex-col gap-1 items-center '>
                            <p className=' text-sm  text-gray-500 '>AUM</p>
                            <p className=' text-sm  text-green-500 '>3.48L Cr</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default MFCollections