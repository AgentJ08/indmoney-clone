import React from 'react'
import IndexCard from './indexcard'

const Indices = () => {
  return (
    <div className=' flex flex-col gap-6 items-center mt-8 h-full '>
      <p className=' font-bold text-5xl '>Indian share markets indices</p>
      <div className=' flex flex-row items-center gap-8 '>
        <IndexCard ind="NIFTY 50" />
        <IndexCard ind="SENSEX" />
        <IndexCard ind="BANK NIFTY" />
        <IndexCard ind="NIFTY 100" />
        <IndexCard ind="NIFTY IT" />
        <IndexCard ind="NIFTY Pharma" />
      </div>
    </div>
  )
}

export default Indices