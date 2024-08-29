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
import { FaCheckCircle, FaRegUserCircle } from "react-icons/fa";
{/* <IoIosLock className="text-[#015f6c] w-[25px]"/> */}
{/* <HiOutlineMail className="text-[#015f6c] w-[25px]"/> */}
{/* <FaRegUserCircle className="text-[#015f6c] w-[25px]"/> */}
import { HiOutlineMail } from "react-icons/hi";
import { UserFormRegisterValidation } from "@/lib/validation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomAlert from "./CustomAlert";
import { MdOutlineError } from "react-icons/md";
import { registerAdmin, registerUser } from "@/lib/actions/register-user";
import { getCookie } from "@/utils/cookie";
export default function RegisterAdmin() {
  const [error,setError] = useState(false);
  const [success,setsuccess] = useState(false);
  const [loading,setLoading] = useState(false);
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(UserFormRegisterValidation),
    defaultValues: {
      username:"",
      email:"",
      password: "",
    },
  });
  const onSubmit = async(values) =>{
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    setLoading(true);
    setsuccess(false);
    try {
      setError(false);
      const register_user = await registerAdmin(values.username,values.email,values.password);
      console.log("DEBUG HERE",register_user);
      if(register_user){
      
        setLoading(false) ;
        form.reset();
        setsuccess(true);
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
        <h1 className="text-2xl md:text-4xl text-[#015f6c] text-center w-full font-bold"> حساب مسؤول</h1>
    {error && <CustomAlert title="الإيمايل أو إسم المستخدم بالفعل موجود" state="failure" discr="من فضلك أدخل إسم مستخدم أو إيمايل جديد" icon={<MdOutlineError size={20} color="red" />} />}
    {success && <CustomAlert title="تم إنشاء حساب مسؤول " state="success" discr="  سيتمكن هذا المسؤول من إدارة لوحة التحكم الخاصة بك يمكنك إنشاء حساب آخر" icon={<FaCheckCircle color="green" size={20} />} />}
      <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="username"
          placeholder="أحمد"
          label="الإسم"
   
        />

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

        <CustomButton type="submit" text="إنشاء حساب مسؤول"  loading={loading} />
      </form>
     
    </Form>
    </>
  );
}
