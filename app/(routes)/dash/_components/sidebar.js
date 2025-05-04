import Image from 'next/image'
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { SiCoinmarketcap } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Exchnage from '../exchange/page';


function Sidebar() {
  return (
    <div className='shadow-md h-screen'>
       <Image src={'/logo.svg'} alt='logo' width={170} height={120}/>
      <div className='mt-10'>
        <a href='/dash'>
        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
        <MdSpaceDashboard />
          <h2>Portfolio</h2>
        </div>
        </a>
        <a href='/dash/exchange'>
        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
        <SiCoinmarketcap />
          <h2>Exchange</h2>
        </div>
        </a>
      </div>
      <a href='/dash/History'>
      <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
      <FaHistory />
          <h2>Transaction History</h2>
        </div>
        </a>
        <a href='/'>
        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
        <IoMdExit />
          <h2>Exit</h2>
        </div>
        </a>
    </div>
  )
}

export default Sidebar