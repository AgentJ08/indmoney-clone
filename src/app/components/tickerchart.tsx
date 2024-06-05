import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from 'axios'

const TickerChart = (props: any) => {

  const [userid, setUserid] = useState<string>("")

    useEffect(() => {
        getUserId();
    })

    const getUserId = async () => {
        const res = await axios.get('/api/users/me')
        setUserid(res.data.data._id)
    }

  const addtowatchlist = async (ticker:any, num:any) => {
    const response = await axios.post(`/api/stocks/${ticker}/addtowatchlist/${userid}_wl${num}`)
  }

  return (
    <div className=' flex justify-center items-center h-[400px] w-[1000px] bg-white rounded-xl mt-8 gap-4 '>
      <p>
        {props.ticker} Chart
      </p>
      <DropdownMenu>
        <DropdownMenuTrigger><Image src={'/watchlist.png'} alt='watchlist' width={20} height={20} /></DropdownMenuTrigger>
        <DropdownMenuContent className=' flex flex-col gap-2 '>
          <button onClick={() => addtowatchlist(props.ticker, 1)}>Add to watchlist 1</button>
          <button onClick={() => addtowatchlist(props.ticker, 2)}>Add to watchlist 2</button>
          <button onClick={() => addtowatchlist(props.ticker, 3)}>Add to watchlist 3</button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default TickerChart