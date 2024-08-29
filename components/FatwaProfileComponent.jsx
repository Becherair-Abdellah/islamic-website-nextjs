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
  FatwaEditValidation,
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

export default function FatwaProfileComponent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const params = new URLSearchParams(window?.location.search);
  const form = useForm({
    resolver: zodResolver(FatwaEditValidation),
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
   <h1 className="text-center font-bold text-xl my-4 text-[#015f6c]">تعديل الفتوى</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
        
            <>
              {success && (
                <CustomAlert
                  title="نجاح التعديل" 
                  state=""
                  discr="تم تعديل الفتوى بنجاح"
                  icon={<FaCheckCircle color="green" size={20} />}
                />
              )}
              {error && (
                <CustomAlert
                  title="فشل التعديل"
                  state="failure"
                  discr="حدث خطأ من فضلك أعد المحاولة من جديد"
                  icon={<MdOutlineError color="red" size={20} />}
                />
              )}
                <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="title"
                placeholder="عنوان الفتوى"
                label="العنوان"
              />
              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="question"
                placeholder="أطرح سؤالك "
                label="السؤال"
              />
              <CustomButton
                type="submit"
                text="تعديل"
                loading={loading}
              />

       
            </>
          
        </form>
      </Form>
    </>
  );
}