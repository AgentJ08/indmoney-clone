import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import Link from 'next/link'


const IOCarousel = () => {
    return (
        <Carousel className=' w-[1000px] '>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center px-6 py-8 border rounded-xl bg-gray-100 hover:scale-110 hover:bg-gray-200 ">
                                <Link href={'/mutual-funds'}>
                                    <div className=' flex flex-col items-start gap-4 '>
                                        <Image src={'/home/mf.avif'} alt='mf' width={80} height={50} />
                                        <p className=' font-bold text-xl '>Mutual Funds</p>
                                        <p className=' text-sm ' >Start building your portfolio with<br />just INR 100</p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center px-6 py-8 border rounded-xl bg-gray-100 hover:scale-110 hover:bg-gray-200 ">
                                <Link href={'/stocks'}>
                                    <div className=' flex flex-col items-start gap-4 '>
                                        <Image src={'/home/indstocks.avif'} alt='stocks' width={80} height={50} />
                                        <p className=' font-bold text-xl '>Indian Stocks</p>
                                        <p className=' text-sm ' >Invest as low as INR 50 SIP on a<br />weekly/monthly basis in any<br />stocks.</p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center px-6 py-8 border rounded-xl bg-gray-100 hover:scale-110 hover:bg-gray-200 ">
                                <Link href={'/us-stocks'}>
                                    <div className=' flex flex-col items-start gap-4 '>
                                        <Image src={'/home/usstocks.avif'} alt='mf' width={80} height={50} />
                                        <p className=' font-bold text-xl '>US Stocks</p>
                                        <p className=' text-sm ' >Buy/Sell US Stocks and ETFs<br />from India directly.</p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center px-6 py-8 border rounded-xl bg-gray-100 hover:scale-110 hover:bg-gray-200 ">
                                <Link href={'/fixed-deposits'}>
                                    <div className=' flex flex-col items-start gap-4 '>
                                        <Image src={'/home/fd.avif'} alt='mf' width={80} height={50} />
                                        <p className=' font-bold text-xl '>Fixed Deposits</p>
                                        <p className=' text-sm ' >Secure your money by investing<br />in highly rated FD. Earn up to<br />9.20%* p.a.</p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center px-6 py-8 border rounded-xl bg-gray-100 hover:scale-110 hover:bg-gray-200 ">
                                <Link href={'/nps'}>
                                    <div className=' flex flex-col items-start gap-4 '>
                                        <Image src={'/home/nps.avif'} alt='nps' width={80} height={50} />
                                        <p className=' font-bold text-xl '>NPS</p>
                                        <p className=' text-sm ' >Your Pathway to Tax-Efficient<br />Retirement Planning!</p>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default IOCarousel