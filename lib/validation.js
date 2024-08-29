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
  title: z.string().min(2, { message: "العنوان يجب أن يكون طوله على الأقل حرفين" }).optional(),
  question: z.string().min(2, { message: "السؤال يجب أن يكون طوله على الأقل حرفين" }).optional(),
});

export const bookEditValidation = z.object({
  title: z.string().min(2, { message: "العنوان يجب أن يحتوي على حرفين على الأقل" }).optional(),
  description: z.string().min(2, { message: "الوصف يجب أن يحتوي على حرفين على الأقل" }).optional(),
  author: z.string().min(2, { message: "اسم المؤلف يجب أن يحتوي على حرفين على الأقل" }).optional(),
  cover_image: z.string().url({ message: "يجب أن يكون رابط الصورة صالحاً" }).optional(),
});