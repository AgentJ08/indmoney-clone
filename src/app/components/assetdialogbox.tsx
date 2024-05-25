import Image from 'next/image'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const AssetDialogBox = () => {

    const [currTab, setCurrtab] = useState("assets")

    return (
        <Dialog>
            <DialogTrigger><Image src={'/down.png'} alt="Down arrow" width={15} height={15} /></DialogTrigger>
            <DialogContent>
                <div className=' flex flex-col gap-4 '>
                    <p className=' text-cyan-600 '>My Networth</p>
                    <p className=' font-semibold text-2xl text-black '>₹32.64k</p>
                    <p className=' text-sm '>Assets ₹32.64k</p>
                    <div className=' flex flex-row gap-3 justify-center '>
                        <button onClick={(currTab)=> setCurrtab("assets")} className={` text-sm rounded-full px-2 py-1 ${currTab=="assets" ? 'bg-blue-400' : 'bg-gray-100'}`} >Assets</button>
                        <button onClick={(currTab)=> setCurrtab("sectors")} className={` text-sm rounded-full px-2 py-1 ${currTab=="sectors" ? 'bg-blue-400' : 'bg-gray-100'}`}>Sectors</button>
                        <button onClick={(currTab)=> setCurrtab("stocks")} className={` text-sm rounded-full px-2 py-1 ${currTab=="stocks" ? 'bg-blue-400' : 'bg-gray-100'}`}>Stocks</button>
                    </div>
                    {currTab=="assets" && <div>Assets</div>}
                    {currTab=="sectors" && <div>Sectors</div>}
                    {currTab=="stocks" && <div>Stocks</div>}
                </div>
            </DialogContent>
        </Dialog>


    )
}

export default AssetDialogBox