"use client";
import { deleteUser } from "@/lib/actions/register-user";
import React, { useState } from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import CustomBadge from "./CustomBadge";

// import CustomBadge from "./CustomBadge";


const ROWFatwa = ({ ID, QUESTION,ANSWER, TITLE, S, P}) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <tr>
    <td className="px-6 py-4 text-right text-md text-gray-900">{ID}</td>
    <td className="px-6 py-4 text-right text-md text-gray-900 ">
        <div className="w-[300px] text-[#015f6c] overflow-hidden whitespace-nowrap text-ellipsis">

         {QUESTION}
        </div>
         </td>
    <td className="px-6 py-4 text-right text-md  text-[#015f6c]">{TITLE}</td>
    <td className="px-6 py-4 flex justify-center text-md text-gray-900">
        <CustomBadge status={S}/>
        </td>
    <td className="px-6 py-4 text-center text-sm  text-[#015f6c]">{P}</td>
    <td className="px-6 py-4 text-center  text-md">

      <span  className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
      <AlertDialog  >
  <AlertDialogTrigger> عرض</AlertDialogTrigger>
  <AlertDialogContent className="w-full">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-center text-[#015f6c]">{QUESTION}</AlertDialogTitle>
      <AlertDialogDescription className="text-center max-h-[150px] overflow-hidden overflow-y-auto mt-8 p-4 ">
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
       {ANSWER}       
      </AlertDialogDescription>
      <div className="flex justify-between items-center w-full" >
        <span className="text-gray-500 text-sm mt-4" >رقم الفتوى : {ID} </span>
        <span className="text-gray-500 text-sm mt-4" > تاريخ النشر : {P} </span>
      </div>
    </AlertDialogHeader>
    <AlertDialogFooter className="text-right flex gap-3 justify-center w-full ">
      <AlertDialogCancel>إلغاء</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      </span>

      <span className="ml-4 text-red-600 hover:text-red-900 mr-3 cursor-pointer" >
        <AlertDialog >
  <AlertDialogTrigger> حذف</AlertDialogTrigger>
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle className="text-center text-[#015f6c]">هل أنت متأكد من هذا القرار</AlertDialogTitle>
      <AlertDialogDescription className="text-center">
        أنت الآن تريد أن تقوم بحذف المستخدم نهائيا من المنصة ولن تقوم بإسترجاع حسابه مرة أخرى
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="text-right flex gap-3 justify-center w-full ">
      <AlertDialogCancel>إلغاء</AlertDialogCancel>
      <AlertDialogAction className="bg-red-600 hover:bg-red-700" onClick={async()=>{
        try {
          await deleteUser(ID);
        } catch (error) {
          console.log(error);
        }
      }}>حذف</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

       
      </span>

    </td>
  </tr>
  );
};

export default ROWFatwa;
