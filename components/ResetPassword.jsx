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
  ResetPasswordUserFormValidation,
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

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const params = new URLSearchParams(window?.location.search);
  const form = useForm({
    resolver: zodResolver(ResetPasswordUserFormValidation),
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
                  discr="تم تغيير بريدك الإلكتروني بنجاح"
                  icon={<FaCheckCircle color="green" size={20} />}
                />
              )}
              {error && (
                <CustomAlert
                  title="Expaire Time"
                  state="failure"
                  discr="هذا الرابط منتهي الصلاحية"
                  icon={<MdOutlineError color="red" size={20} />}
                />
              )}
              <CustomFormField
                fieldType={FormFieldType.PASSWORD}
                control={form.control}
                name="password"
                placeholder="●●●●●●●●●●"
                iconSrc={<IoMdLock className="text-[25px] text-[#015f6c]"/>}

                label="كلمة المرور"
              />

              <CustomFormField
                fieldType={FormFieldType.PASSWORD}
                control={form.control}
                name="confirmPassword"
                placeholder="●●●●●●●●●●"
                label="تأكيد كلمة المرور"
                iconSrc={<IoMdLock className="text-[25px] text-[#015f6c]"/>}
              />

              <CustomButton
                type="submit"
                text="إنشاء كلمة سر جديدة"
                loading={loading}
              />
            </>
           
        </form>
      </Form>
    </>
  );
}