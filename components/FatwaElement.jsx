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
import EditProfileComponent from "./FatwaProfileComponent"
import FatwaProfileComponent from "./FatwaProfileComponent"
import Link from "next/link"
  
const FatwaElement = ({ID,QUESTION,title,Fatwa,Book}) => {
  return (
    <div className='p-2 border-b-[1px] flex items-center justify-between bg-gray-50'>
  {Fatwa && <>
  
    <span>{ID}</span>
      <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{QUESTION}</p>
     
  <Link href={'/u/profile'} className="text-[#015f6c] cursor-pointer">  تعديل  </Link>
</>}

{Book && <>
  
  <span>{ID}</span>
    <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{title}</p>
   
  <Link className="text-[#015f6c] cursor-pointer">  تعديل  </Link>
</>}
    </div>
  )
}

export default FatwaElement
