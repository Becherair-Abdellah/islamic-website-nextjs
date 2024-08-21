import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
const CustomBtn = ({value}) => {
  return (
  <div className="w-full border-b-2 flex items-center justify-between">
      <Button className="bg-blue-900 text-white font-bold rounded-none" >
    {value}
   </Button>
   <Link href="">
   المزيد
   </Link>
  </div>
  )
}

export default CustomBtn
