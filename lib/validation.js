import { z } from 'zod';

export const UserFormRegisterValidation = z.object({
  username: z.string()
    .min(2, "يجب أن يكون الاسم على الأقل 2 حرف")
    .max(50, "يجب ألا يزيد الاسم عن 50 حرفًا"),
  
  email: z.string()
    .email("البريد الإلكتروني غير صحيح"),
  
  password: z.string()
    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل")
});

export const UserFormLoginValidation = z.object({
  email: z.string()
    .email("البريد الإلكتروني غير صحيح"),
  
  password: z.string()
    .min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل")
});

export const ResetPasswordUserFormValidation = z.object({
  password: z.string().min(8, "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "كلمات المرور غير متطابقة",
  path: ["confirmPassword"]
});
export const ForgetPasswordUserFormValidation = z.object({
  email: z.string().email("بريد إلكتروني غير صالح"),
});


export const FatwaEditValidation = z.object({
  title: z.string().min(5, { message: "العنوان يجب أن يكون طوله على الأقل 5 أحرف" }).max(100, { message: "العنوان يجب أن لا يتجاوز 100 حرف" }),
  question: z.string().min(10, { message: "السؤال يجب أن يكون طوله على الأقل 10 أحرف" }).max(1000, { message: "السؤال يجب أن لا يتجاوز 1000 حرف" }),
});
