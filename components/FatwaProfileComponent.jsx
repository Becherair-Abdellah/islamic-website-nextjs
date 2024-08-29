'use client'
import { FatwaEditValidation } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { Form, useForm } from 'react-hook-form';
import CustomAlert from './CustomAlert';
import CustomFormField, { FormFieldType } from './CustomFormField';
import CustomButton from './CustomButton';


const FatwaProfileComponent = () => {
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const form = useForm({
        resolver: zodResolver(FatwaEditValidation),
        defaultValues: {
            title: "",
            question: "",
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
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-4">
        
            <>
              {success && (
                <CustomAlert
                  title="Success"
                  state=""
                  discr="تم حفظ التغيرات بنجاح"
                  icon={<FaCheckCircle color="green" size={20} />}
                />
              )}
              {error && (
                <CustomAlert
                  title="Email Not Found"
                  state="failure"
                  discr="حدث خطأ من فضلك أعد المحاولة"
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
                  placeholder="سؤال الفتوى"
                  // label="السؤال"
      
                />
                <CustomButton
                  type="submit"
                  text="حفظ"
                  loading={loading}
                /> 
            </>
          
        </form>
      </Form>
    )
}

export default FatwaProfileComponent
