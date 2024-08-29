import React from 'react'
import { Badge } from './ui/badge'
import { IoCalendarOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { FaCheck } from 'react-icons/fa6';
const CustomBadge = ({status}) => {
  return (
<>
{status === 'done' &&     <Badge className="mr-5 text-[10px] p-1 px-2 bg-green-200 border-none text-green-600 space-x-2 flex items-center gap-3 text-center"variant="outline">
    <FaCheck  className='mr-2' size={17}/>
  تم الرد
</Badge>}

{status === 'pending' &&     <Badge className="mr-5 text-[10px] p-1 px-2 bg-blue-200 border-none text-blue-800 space-x-2 flex items-center gap-3"variant="outline">
    <CgSandClock  className='mr-2' size={17}/>
في الإنتظار 
</Badge>}
</>
  )
}

export default CustomBadge
