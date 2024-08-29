"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormFieldType } from "./CustomFormField";
import {
  Form,
} from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import CustomButton from "./CustomButton";
import { IoIosLock } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
{/* <IoIosLock className="text-[#015f6c] w-[25px]"/> */}
{/* <HiOutlineMail className="text-[#015f6c] w-[25px]"/> */}
{/* <FaRegUserCircle className="text-[#015f6c] w-[25px]"/> */}
import { HiOutlineMail } from "react-icons/hi";
import { UserFormLoginValidation } from "@/lib/validation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomAlert from "./CustomAlert";
import { MdOutlineError } from "react-icons/md";
import { LoginUser } from "@/lib/actions/register-user";
import { getCookie } from "@/utils/cookie";
export default function LoginUserForm({sestOpen,setKey,setType}) {
  const [error,setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserFormLoginValidation),
    defaultValues: {
      email:"",
      password: "",
    },
  });
  const onSubmit = async(values) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setLoading(true);
    try {
      setError(false);
      const register_user = await LoginUser(values.email,values.password);
      console.log("DEBUG HERE",register_user);
      if(register_user){
        sestOpen(false);
        setLoading(false) ;
        setKey(true);
      
      }else{
        setError(true);
        setLoading(false) ;
      }
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-4">
        <h1 className="text-2xl md:text-4xl text-[#015f6c] text-center w-full font-bold"> تسجيل الدخول</h1>
    {error && <CustomAlert title="الإيمايل أو كلمة السر خاطئة" state="failure" discr="من فضلك أدخل كلمة سر أو إيمايل صحيح" icon={<MdOutlineError size={20} color="red" />} />}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          placeholder="name@gmail.com"
          label="إيمايل"
        />

<CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="password"
          placeholder="●●●●●●●●●●"
          label="كلمة المرور"
    
        />
  <Link href="/forget-password">
            <h2 className="text-[#015f6c] text-md underline mt-2">
              نسيت كلمة السر
            </h2>
          </Link>
        <CustomButton type="submit" text="تسجيل الدخول"  loading={loading} />
        <h2 className="text-[#015f6c] text-md  text-center cursor-pointer mt-2" onClick={()=>{
          setType('register')
        }}>
              إنشاء حساب جديد
            </h2>
      </form>
    </Form>
    </>
  );
}
