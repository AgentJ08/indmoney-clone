import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import Link from 'next/link'

const AccordianBox = () => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Insure</AccordionTrigger>
                <AccordionContent>
                    <div className=' flex flex-row gap-4 justify-start hover:text-blue-400 '>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/life.avif'} alt='life' width={20} height={20} />
                                <p>Life</p>
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/health.avif'} alt='health' width={20} height={20} />
                                <p>Health</p>
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/topup.avif'} alt='topup' width={20} height={20} />
                                <p>Top-up</p>
                            </div>
                        </Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Utilities</AccordionTrigger>
                <AccordionContent>
                    <div className=' flex flex-row gap-4 justify-start hover:text-blue-400 '>
                        <Link href={'/calculators'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/calculator.avif'} alt='life' width={20} height={20} />
                                <p>Calculator</p>
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/credit_score.avif'} alt='health' width={20} height={20} />
                                <p>Credit Score</p>
                            </div>
                        </Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>SIP</AccordionTrigger>
                <AccordionContent>
                    <div className=' flex flex-row gap-4 justify-start hover:text-blue-400 '>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/usstocks.avif'} alt='life' width={20} height={20} />
                                <p>US Stocks</p>
                            </div>
                        </Link>
                        <Link href={'/mutual-funds'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/mf.avif'} alt='health' width={20} height={20} />
                                <p>Mutual Funds</p>
                            </div>
                        </Link>
                        <Link href={'/stocks'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/indstocks.png'} alt='topup' width={20} height={20} />
                                <p>INDstocks</p>
                            </div>
                        </Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Learn</AccordionTrigger>
                <AccordionContent>
                    <div className=' flex flex-row gap-4 justify-start hover:text-blue-400 '>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/learn.avif'} alt='life' width={20} height={20} />
                                <p>IND Learn</p>
                            </div>
                        </Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Help Center</AccordionTrigger>
                <AccordionContent>
                    <div className=' flex flex-row gap-4 justify-start hover:text-blue-400 '>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/life.avif'} alt='life' width={20} height={20} />
                                <p>My Tickets</p>
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/health.avif'} alt='health' width={20} height={20} />
                                <p>FAQ&apos;s</p>
                            </div>
                        </Link>
                        <Link href={'#'}>
                            <div className=' flex flex-col gap-1 '>
                                <Image src={'/accordionbox/topup.avif'} alt='topup' width={20} height={20} />
                                <p>Support</p>
                            </div>
                        </Link>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}

export default AccordianBox