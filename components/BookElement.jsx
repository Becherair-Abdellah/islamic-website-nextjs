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
import ForgetPasswordUserForm from "./ForgetPassword"
import BookProfileCompoenent from "./BookProfileCompoenent"
import '@/styles/no-scroll.css'
const BookElement = ({ID,title}) => {
  return (
   <>
    <div className='p-2 border-b-[1px] flex items-center justify-between bg-gray-50'>

<span>{ID}</span>
  <p className='overflow-hidden whitespace-nowrap text-ellipsis'>{title}</p>
  
  <AlertDialog >
<AlertDialogTrigger className="text-[#015f6c] cursor-pointer">  تعديل  </AlertDialogTrigger>
<AlertDialogContent >
<div className="h-[400px] overflow-hidden  overflow-y-visible no-scroll p-3">
<BookProfileCompoenent/>
</div>
<AlertDialogFooter className="text-right flex gap-3 justify-center w-full ">
  <AlertDialogCancel className="w-full  text-center ">إلغاء</AlertDialogCancel>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialog>
  </div>
   </>
  )
}

export default BookElement
