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

export const HotCarousel = () => {
    return (
        <Carousel className=' w-[1000px] mt-8 mx-16 '>
            <CarouselContent>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>IDEA</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export const MostCarousel = () => {
    return (
        <Carousel className=' w-[1000px] mt-8 mx-16 '>
            <CarouselContent>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>MOST</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export const TopGCarousel = () => {
    return (
        <Carousel className=' w-[1000px] mt-8 mx-16 '>
            <CarouselContent>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-green-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPG</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-green-500 ' >0.66% ▲</p>
                        </div>
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export const TopLCarousel = () => {
    return (
        <Carousel className=' w-[1000px] mt-8 mx-16 '>
            <CarouselContent>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
                <CarouselItem className="md:basis-1/6 lg:basis-1/12 flex justify-center items-center">
                    <Link href={'/stocks/idea'}>
                        <div className=' flex flex-col justify-center items-center gap '>
                            <Image src={'/home/mf.avif'} alt='mf' width={60} height={60} className=' rounded-full border border-red-400 p-2 ' />
                            <p className=' font-bold text-lg '>TOPL</p>
                            <p className=' text-sm ' >₹15.00</p>
                            <p className=' text-sm text-red-500 ' >0.66% ▼</p>
                        </div>
                    </Link>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}