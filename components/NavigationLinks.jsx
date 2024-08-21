'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const NavigationLinks = () => {
  return (
    <Sheet>
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
              <a className="transition text-blue-900  text-lg font-semibold" href="#">  الرئيسية </a>
            </li>

            <li  className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#">   الأسماء الحسنى </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#">    الفتاوى </a>
            </li >

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#"> المكتبة </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#"> الصوتيات </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#">  الخطب </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#">  الموسوعات </a>
            </li>

            <li className="p-2 w-full rounded-md bg-blue-100">
              <a className="transition text-blue-900 text-lg font-semibold" href="#">  المنتدى </a>
            </li>
          </ul>
        </nav>
  </SheetContent>
</Sheet>

  )
}

export default NavigationLinks
