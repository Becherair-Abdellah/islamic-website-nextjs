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

// import CustomBadge from "./CustomBadge";


const ROW = ({ ID, NAME, EMAIL, F, B, S,V ,C}) => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <tr>
    <td className="px-6 py-4 text-right text-md text-gray-900">{ID}</td>
    <td className="px-6 py-4 text-right text-md text-gray-900"> {NAME}</td>
    <td className="px-6 py-4 text-right text-md text-gray-900">{EMAIL}</td>
    <td className="px-6 py-4 text-center text-md text-gray-900">{F}</td>
    <td className="px-6 py-4 text-center text-md text-gray-900">{B}</td>
    <td className="px-6 py-4 text-center text-md text-gray-900">{S}</td>
    <td className="px-6 py-4 text-center text-md text-gray-900">{V}</td>
    <td className="px-6 py-4 text-center text-md text-gray-900">{C}</td>
    <td className="px-6 py-4 text-center  text-md">

      <span  className="text-indigo-600 hover:text-indigo-900 cursor-pointer">
        
        <DropdownMenu>
  <DropdownMenuTrigger>عرض</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuSeparator /> 
    <Link href={`/admin/users/${ID}?type=fatwa&userid=${ID}`}>
    <DropdownMenuItem className="text-right flex justify-end text-[#015f6c] cursor-pointer">الفتاوى</DropdownMenuItem>
    </Link>
    <Link href={`/admin/users/${ID}?type=book&userid=${ID}`}>
    <DropdownMenuItem className="text-right flex justify-end text-[#015f6c] cursor-pointer">الكتب</DropdownMenuItem>
    </Link>
    <Link href={`/admin/users/${ID}?type=sound&userid=${ID}`}>
    <DropdownMenuItem className="text-right flex justify-end text-[#015f6c] cursor-pointer">الصوتيات</DropdownMenuItem>
    </Link>

    <Link href={`/admin/users/${ID}?type=video&userid=${ID}`}>
    <DropdownMenuItem className="text-right flex justify-end text-[#015f6c] cursor-pointer">الفيديوهات</DropdownMenuItem>
    </Link>
    <Link href={`/admin/users/${ID}?type=comment&userid=${ID}`}>
    <DropdownMenuItem className="text-right flex justify-end text-[#015f6c] cursor-pointer">التعليقات</DropdownMenuItem>
    </Link>
  </DropdownMenuContent>
</DropdownMenu>

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

export default ROW;
