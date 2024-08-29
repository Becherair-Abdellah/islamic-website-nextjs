import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
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
import RegisterUserForm from './RegisterUserForm';
import RegisterAdmin from './RegisterAdmin';
  
const CreateAdmin = () => {
    const [isOpen,setOpen] = useState(false);
  return (
    <div>
        <AlertDialog open={isOpen} onOpenChange={setOpen}>
  <AlertDialogContent>
    <RegisterAdmin/>
    <AlertDialogFooter>
      <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
    
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        <div className="bg-[#015f6c] text-white p-2  rounded-md cursor-pointer font-bold" onClick={()=>{  
setOpen(true);
            }}>
            <FaPlus size={25} color="text-[#015f6c]" className="" />
            </div>

    </div>
  )
}

export default CreateAdmin
