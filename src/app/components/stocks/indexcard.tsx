import Link from 'next/link'
import React from 'react'

const IndexCard = (props: any) => {

  const currPrice = 22957.10
  const prevPrice = 22967.65
  let link = "/indices/"
  link += props.ind.toLowerCase().replaceAll(' ','-')

  return (
    <Link href={link}>
      <div className={` flex flex-col gap-4 ${currPrice > prevPrice ? 'bg-green-200' : 'bg-red-200'} rounded-lg py-3 px-6`}>
        <p className=' font-semibold text-lg '>{props.ind}</p>
        <p></p>
        <p>₹{currPrice}</p>
        <p className={`${currPrice > prevPrice ? 'text-green-800' : 'text-red-800'} text-sm`}>{Math.round(((currPrice - prevPrice) * 100)) / 100} ({currPrice < prevPrice ? "▼" : "▲"} {Math.round(((currPrice - prevPrice) / prevPrice) * 10000) / 100}%)</p>
      </div>
    </Link>
  )
}

export default IndexCard