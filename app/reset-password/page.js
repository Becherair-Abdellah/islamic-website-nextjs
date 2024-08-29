import { RiMailSendLine } from "react-icons/ri";
import ResetPassword from "@/components/ResetPassword";
const page = () => {
  return (
    <>
   
      <div>
        <div className="flex justify-center items-center  w-full h-screen">
          <div className="p-6 space-y-20">
            <div className="flex justify-center items-center ">
            <RiMailSendLine className="text-[#015f6c] text-[150px]" />
            </div>


            <div>
              <div className="mb-5">
                <h1 className="text-3xl md:text-4xl md: font-bold text-primaryColor">
              إنشاء كلمة سر جديدة؟
                </h1>
                <p className="text-md  font-semibold mt-3 text-gray-500">
              قم بإدخال كلمة سر جديدة ويجب أن تكون قوية
                </p>
              </div>

              <ResetPassword />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;