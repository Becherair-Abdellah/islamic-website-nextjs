'use client'
import React from 'react'
import { Button } from './ui/button'

import Link from 'next/link'
import { RiLoader4Line } from "react-icons/ri";
const CustomButton = ({className,href,type,text,loading,onClick}) => {
  return (
    <Button onClick={onClick} variant="" type={`${type}`||''} className={`${loading?'bg-red-900 pointer-events-none':''} ${className||"text-md text-white bg-[#015f6c] cursor-pointer w-full"}`}>
   {!type ?  <Link href={`${href|| ''}`} className="w-full">
   {loading||text}
    </Link>: loading||text}
    {loading && type && <RiLoader4Line
    alt='loader'
    className='animate-spin_fast text-[25px]'
    />}
    </Button>
  )
}

export default CustomButton
