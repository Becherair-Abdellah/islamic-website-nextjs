"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormFieldType } from "./CustomFormField";

import {
  Form,
} from "@/components/ui/form";
import CustomFormField from "./CustomFormField";
import CustomButton from "./CustomButton";
import { HiOutlineMail } from "react-icons/hi";
import {
  ForgetPasswordUserFormValidation,
} from "@/lib/validation";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdOutlineError } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import CustomAlert from "./CustomAlert";
import { IoMdLock } from "react-icons/io";
// import f from ''

// const formSchema = z.object(UserFormValidation);

export default function ForgetPasswordUserForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const params = new URLSearchParams(window?.location.search);
  const form = useForm({
    resolver: zodResolver(ForgetPasswordUserFormValidation),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    // try {
    //   setError(false);

    //   // forget password  page

    //   const user = await forgetpassword(values);

    //   if (user) {
    //     setSuccess(true);
    //     setLoading(false);
    //   } else {
    //     setError(true);
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
        
            <>
              {success && (
                <CustomAlert
                  title="Success"
                  state=""
                  discr="لقد قمنا بإرسال رابط إلى بريدك الألكتروني لإسترجاع الحساب"
                  icon={<FaCheckCircle color="green" size={20} />}
                />
              )}
              {error && (
                <CustomAlert
                  title="Email Not Found"
                  state="failure"
                  discr="الإيمايل الذي أدخلته غير موجود"
                  icon={<MdOutlineError color="red" size={20} />}
                />
              )}
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                placeholder="name@gmail.com"
                label="الإيمايل"
                iconSrc={<HiOutlineMail className="text-[25px] text-[#015f6c]"/>}
              />
              <CustomButton
                type="submit"
                text="إسترجاع كلمة المرور"
                loading={loading}
              />

              <div className="text-center pt-3 ">
                <div>
               
                  <Link href="/u/" className="">
                    {" "}
                    <strong
                      className="text-[#015f6c]"
                    >
                      الرجوع للصفحة الرئيسية
                    </strong>
                  </Link>
                  !
                </div>
              </div>
            </>
          
        </form>
      </Form>
    </>
  );
}