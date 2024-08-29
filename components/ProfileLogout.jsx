import { FaRegUserCircle } from 'react-icons/fa';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { logout } from '@/lib/actions/register-user';
import { Button } from './ui/button';
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
import DataComponent from './DataComponent';
  
const ProfileLogout = ({setAccessKey}) => {
  return (
<div className="flex justify-end w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
    {/* // profile components  */}

    <DropdownMenu className="relative left-3">
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <FaRegUserCircle className="text-[25px]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        <DropdownMenuLabel className="text-[#015f6c] font-semibold text-end cursor-pointer "
         > 
        

         <AlertDialog >
  <AlertDialogTrigger>  حسابي  </AlertDialogTrigger>
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle className="text-center text-[#015f6c]">الملف الشخصي</AlertDialogTitle>
      <div>
       {/* // فتاوى  */}
        <DataComponent Fatwa title={"الفتاوى"} nbrElement={2} />
            {/* // كتب  */}
        <DataComponent Book title={"الكتب"} nbrElement={5} />
      </div>
    </AlertDialogHeader>
    <AlertDialogFooter className="text-right flex gap-3 justify-center w-full ">
      <AlertDialogCancel className="w-full  text-center ">إلغاء</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </DropdownMenuLabel>
        <DropdownMenuItem className="flex items-center justify-end bg-gray-50 p-2 rounded-md cursor-pointer " onClick={()=>{
        logout();
        setAccessKey(false);
       
        }}>تسجيل الخروج </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
</div>
  )
}

export default ProfileLogout
