import React from 'react'

const TickerChart = (props:any) => {
  return (
    <div className=' flex justify-center items-center h-[400px] w-[1000px] bg-white rounded-xl mt-8 '>{props.ticker}</div>
  )
}

export default TickerChart