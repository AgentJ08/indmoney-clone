import { Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className=' flex flex-row h-[450px] bg-[#191C1F] text-white '>
            <div className=' basis-3/6 flex flex-col justify-center gap-6 px-32 '>
                <div>
                    <Image src={'/IND_logo_white_tm.avif'} alt='INDMoney Logo' width={125} height={100} />
                </div>
                <div className=' flex flex-row gap-4 '>
                    <Link href={'/login'}><Image src={'/app-store.svg'} alt='App Store' width={150} height={100} /></Link>
                    <Link href={'/login'}><Image src={'/play-store.svg'} alt='Play Store' width={150} height={100} /></Link>
                </div>
                <div className=' flex flex-row gap-2 items-center '>
                    <Link href={'https://www.facebook.com/indmoney'}><Image src={'/fb.png'} alt='App Store' width={30} height={20} /></Link>
                    <Link href={'https://in.linkedin.com/company/indmoney'}><Image src={'/li.png'} alt='App Store' width={30} height={20} /></Link>
                    <Link href={'https://twitter.com/INDmoneyApp'}><Image src={'/tw.png'} alt='App Store' width={35} height={20} /></Link>
                    <Link href={'https://www.youtube.com/channel/UCm7xZ9sbqhuARuDDcckh8Jg'}><Image src={'/yt.png'} alt='App Store' width={40} height={20} /></Link>
                    <Link href={'https://www.instagram.com/indmoneyapp/'}><Image src={'/in.png'} alt='App Store' width={43} height={20} /></Link>
                    <Link href={'https://t.me/indmoneyofficial'}><Image src={'/te.png'} alt='App Store' width={23} height={20} /></Link>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className=' text-sm '>All Rights Reserved | © Copyright 2024</div>
            </div>
            <div className=' basis-2/6 flex flex-row justify-center gap-14 '>
                <div className=' flex flex-col justify-center gap-4 '>
                    <p className=' font-semibold text-xl '>Explore Products</p>
                    <Link href={'/mutual-funds'}><p>Mutual Funds</p></Link>
                    <Link href={'/stocks'}><p>INDstocks</p></Link>
                    <Link href={'/us-stocks'}><p>US Stocks</p></Link>
                    <Link href={'/ipo'}><p>IPO</p></Link>
                    <Link href={'/fixed-deposit'}><p>Fixed Deposit</p></Link>
                    <Link href={'/calculators'}><p>Calculators</p></Link>
                    <Link href={'/check-free-credit-score'}><p>Credit Score</p></Link>
                </div>
                <div className=' flex flex-col justify-center gap-4 '>
                    <p className=' font-semibold text-xl '>Company</p>
                    <Link href={'/about'}><p>About Us</p></Link>
                    <Link href={'/blog'}><p>Blog</p></Link>
                    <Link href={'/privacy-policy'}><p>Privacy Policy</p></Link>
                    <Link href={'/terms-of-services'}><p>Terms & Conditions</p></Link>
                    <Link href={'/policy-center'}><p>Legal & Regulatory</p></Link>
                    <Link href={'/grievance-redressal-policy'}><p>Grievance Redressal Policy</p></Link>
                    <Link href={'/sitemap'}><p>Site Map</p></Link>
                </div>
            </div>
            <div className=' basis-1/6 flex flex-row justify-center '>
                <div className=' flex flex-col justify-start gap-4 pt-[73px] pr-28 '>
                    <p className=' font-semibold text-xl '>Contacts</p>
                    <Link href={'/customer-service'}><p>Customer Service</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer