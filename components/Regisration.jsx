'use client'
import React, { useState } from 'react'
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
import Link from 'next/link'
import RegisterUserForm from './RegisterUserForm'
import LoginUserForm from './LoginUserForm'
import { FaRegUserCircle } from "react-icons/fa";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { logout } from '@/lib/actions/register-user'
import { getCookie } from '@/utils/cookie'
import ProfileLogout from './ProfileLogout'
  
const Regisration = () => {
    const [isOpen,setOpen] = useState('')
    const [isType,setType] = useState('')
    const [accessKey,setAccessKey] = useState(false)
  return (
 <>
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
    <AlertDialogContent>
{isType === 'register' && <RegisterUserForm sestOpen={setOpen} setKey={setAccessKey} />}
{isType === 'login' && <LoginUserForm setType={setType} sestOpen={setOpen} setKey={setAccessKey}/>}
      <AlertDialogFooter>
        <AlertDialogCancel className="outline-none w-full focus:outline-none text-[#015f6c] font-bold" onClick={()=>{
                    setOpen(false)
        }}>إلغاء</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>

  {/* {!accessKey? <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-2">
                <span
                  className="cursor-pointer rounded-md bg-[#015f6c] px-5 py-2.5 text-sm font-medium text-white shadow"
                  onClick={()=>{
                    setOpen(true)
                    setType('login')

                  }}
                >
                  تسجيل الدخول
                </span>

                <div className="hidden md:flex">
                  <span
                    className="cursor-pointer rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#015f6c]"
                   
                    onClick={()=>{
                        setOpen(true)
                        setType('register')
                      }}
                  >
                    إنشاء حساب
                  </span>
                </div>
              </div>
  </div>:
  <ProfileLogout setAccessKey={setAccessKey}/>} */}
  <ProfileLogout setAccessKey={setAccessKey}/>
 </>
  
  )
}

export default Regisration
