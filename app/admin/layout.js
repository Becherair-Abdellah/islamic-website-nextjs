'use client'
import Link from "next/link"
import {
  CircleUser,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaCircleUser, FaUserDoctor } from "react-icons/fa6";
import { useRouter } from "next/navigation";
export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    const [open,setOpen] = useState(false);
    const router = useRouter();
  //   const logout = async ()=>{
  //     try {
  //         const response = await fetch("/api/logout",{
  //             method: 'POST',            
  //         });
  //         const data = await response.json();
  //         console.log(data);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // };
    return (
      
  
        <>
        <div className="flex min-h-screen w-full flex-col">
          <header className="sticky top-0 flex h-16 items-center bg-white gap-4 border-b bg-background px-4 md:px-6">
    
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
              <Link
                href="/admin/dashboard"
                className="flex font-bold items-center gap-2 text-lg md:text-base"
              >
                {/* <Package2 className="h-6 w-6" /> */}
                <span className="text-2xl font-bold text-[#015f6c]">الشعار </span>
              </Link>
    
              <Link
                href="/admin/users"
                className="text-foreground transition-colors hover:text-foreground"
              >
                المستخدمين
              </Link>
    
              <Link
                href="/admin/fatawa"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                الفتاوى
              </Link>
    
            </nav>
            
            <Sheet className="" open={open} onOpenChange={setOpen} >
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                 
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-white">
                <nav className="grid gap-6 text-lg  font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <span className="text-primaryColor text-3xl font-bold">Abdellah</span>
                  </Link>
    
                  <Link href="/admin/dashboard" onClick={()=>{setOpen(false)}} className="hover:text-foreground bg-primaryColor3 p-2 rounded-md text-primaryColor flex gap-2 items-center">
                  <LuLayoutDashboard size={20} className="text-primaryColor" />
                   <span className="text-md">المستخدمين</span>
                  </Link>
    
                  <Link href="/admin/doctors" onClick={()=>{setOpen(false)}} className="hover:text-foreground bg-primaryColor3 p-2 rounded-md text-primaryColor flex gap-2 items-center">
                  <FaUserDoctor  size={20} className="text-primaryColor" />
                   <span className="text-md">الفتاوى</span>
                  </Link>
    
                </nav>
              </SheetContent>
            </Sheet>
    
            <div className="flex justify-end w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
              <DropdownMenu className="">
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <FaCircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-white">
                  <DropdownMenuLabel className="text-end">الحساب</DropdownMenuLabel>
                  <DropdownMenuItem  className=" p-2 mx-auto rounded-md cursor-pointer flex justify-end" onClick={()=>{
                    // router.push("/login");
                    // logout();
                  }}>تسجبل الخروج</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          {children}
        </div>
        </>
        
        
        
    )
  }


  