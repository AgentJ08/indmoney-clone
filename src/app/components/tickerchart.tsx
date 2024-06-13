"use client";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import axios from 'axios'

const TickerChart = (props: any) => {

  const [userid, setUserid] = useState<string>("")
  const { toast } = useToast()
  const [qty, setQty] = useState(0);

  const ltp = 100;

  useEffect(() => {
    getUserId();
  }, [])

  const incqty = () => setQty(qty + 1)
  const decqty = () => { if (qty > 0) setQty(qty - 1) }

  const getUserId = async () => {
    const res = await axios.get('/api/users/me')
    setUserid(res.data.data._id)
  }

  const addtowatchlist = async (ticker: any, num: any) => {
    const response = await axios.post(`/api/stocks/${ticker}/addtowatchlist/${userid}_wl${num}`).
      then(() => { toast({ description: `Successfully added to watchlist ${num}` }) })
  }

  const placeOrder = async (ticker: string, qty: number, ordertype: string, price: string) => {
    const order = {
      ticker,
      quantity:qty,
      ordertype,
      price,
      tickertype: 'stock'
    }
    await axios.post(`/api/users/${ordertype}`, order).
    then((orderres) => {toast({title:`${orderres.data.message}`, description: `${order.ordertype.toUpperCase()} order for ${order.quantity} ${order.tickertype}s of ${order.ticker} executed SUCCESSFULLY.`, variant:'success'})}).
    catch((error) => {toast({description: `${error.response.data.error}`, variant:'destructive'})}).
    finally(() => {setQty(0)})
  }

  return (
    <div className=' flex justify-center items-center h-[400px] w-[1000px] bg-white rounded-xl mt-8 gap-4 '>
      <p>
        {props.ticker} Chart
      </p>
      {userid != "" && (
        <div className=' flex gap-4 '>
          <DropdownMenu>
            <DropdownMenuTrigger><Image src={'/watchlist.png'} alt='watchlist' width={20} height={20} /></DropdownMenuTrigger>
            <DropdownMenuContent className=' flex flex-col gap-2 '>
              <button onClick={() => addtowatchlist(props.ticker, 1)} className=' bg-gray-200 px-2 py-1 hover:bg-blue-400 '>Add to watchlist 1</button>
              <button onClick={() => addtowatchlist(props.ticker, 2)} className=' bg-gray-200 px-2 py-1 hover:bg-blue-400 '>Add to watchlist 2</button>
              <button onClick={() => addtowatchlist(props.ticker, 3)} className=' bg-gray-200 px-2 py-1 hover:bg-blue-400 '>Add to watchlist 3</button>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog>
            <AlertDialogTrigger className=' bg-gray-900 text-white px-5 py-1 rounded-full hover:bg-gray-700 ' >Buy</AlertDialogTrigger>
            <AlertDialogContent className=' w-80 '>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <Card>
                    <CardHeader>
                      <CardTitle>Buy {props.ticker}</CardTitle>
                      <CardDescription>Buy in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <div className=' flex flex-row gap-3 items-center '>
                              <button type='button' className=' bg-black text-white p-2 ' onClick={decqty}>-</button>
                              <p>{qty}</p>
                              <button type='button' className=' bg-black text-white p-2 ' onClick={incqty}>+</button>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="price">Price</Label>
                            <p>{ltp}</p>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="total">Total amount</Label>
                            <p>{ltp * qty}</p>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <AlertDialogCancel onClick={() => setQty(0)}>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => placeOrder(props.ticker, qty, 'buy', ltp.toString())} disabled={qty==0 ? true: false} >Buy</AlertDialogAction>
                    </CardFooter>
                  </Card>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
          <AlertDialog>
            <AlertDialogTrigger className=' bg-gray-900 text-white px-5 py-1 rounded-full hover:bg-gray-700 '>Sell</AlertDialogTrigger>
            <AlertDialogContent className=' w-80 '>
              <AlertDialogHeader>
                <AlertDialogDescription>
                  <Card>
                    <CardHeader>
                      <CardTitle>Sell {props.ticker}</CardTitle>
                      <CardDescription>Sell in one-click.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form>
                        <div className="grid w-full items-center gap-4">
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="quantity">Quantity</Label>
                            <div className=' flex flex-row gap-3 items-center '>
                              <button type='button' className=' bg-black text-white p-2 ' onClick={decqty}>-</button>
                              <p>{qty}</p>
                              <button type='button' className=' bg-black text-white p-2 ' onClick={incqty}>+</button>
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="price">Price</Label>
                            <p>{ltp}</p>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="total">Total amount</Label>
                            <p>0</p>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <AlertDialogCancel onClick={() => setQty(0)}>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => placeOrder(props.ticker, qty, 'sell', ltp.toString())} disabled={qty==0 ? true: false}>Sell</AlertDialogAction>
                    </CardFooter>
                  </Card>
                </AlertDialogDescription>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  )
}

export default TickerChart