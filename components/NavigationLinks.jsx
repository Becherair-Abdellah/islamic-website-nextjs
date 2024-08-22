'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import { useState } from "react"
  
const NavigationLinks = () => {
  const [isOpen,setOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
  <SheetTrigger>
  <div className="block lg:hidden">
          <div className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
  </SheetTrigger>
  <SheetContent>
  <nav aria-label="Global" className="w-full h-full mt-10  ">
          <ul className="flex flex-col items-start text-white gap-3  text-sm w-full">
            <li className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900  text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }} href="/u/">  الرئيسية </Link>
            </li>

            <li  className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}    href="/u/namesallah">   الأسماء الحسنى </Link>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}   href="/u/fatwa/topics">    الفتاوى </Link>
            </li >

            <li className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}   href="/u/library/books"> المكتبة </Link>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}   href="/u/sounds/"> الصوتيات </Link>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <Link className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}  href="/u/khotab/topics">  الخطب </Link>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}  href="/u/mawso3at/topics">  الموسوعات </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" onClick={()=>{
                setOpen(false);
              }}  href="#">  المنتدى </a>
            </li>
          </ul> 
        </nav>
  </SheetContent>
</Sheet>

  )
}

export default NavigationLinks
