import ContentClass from "@/components/ContentClass";
import EachClass from "@/components/EachClass";
import VideoSection from "@/components/VideoSection";
import React from "react";

const ThreeSectionDiv = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl">
      {/* القسم العلوي */}
      <div className="flex-grow flex items-center justify-center h-[250px] border-t-2 bg-[#015f6c]">
        <h1 className="text-4xl md:text-6xl font-bold text-white">الملك</h1>
      </div>

      {/* القسمان السفليان */}
      <div className="flex flex-col md:flex-row">
        {/* القسم الأيمن */}
        <div className="w-full md:w-3/12  p-4 border-l-2">
        <h2 className="p-2 border-2 text-xs md:text-sm border-blue-950 bg-[#015f6c] text-white cursor-pointer  mt-2 font-bold text-center mb-3">
          الأقسام
        </h2>
          <div className="grid grid-cols-2 gap-1">
          <EachClass title="التعريف بالإسم" href="#" />
          <EachClass title="في السنة" href="#" />
          <EachClass title="في القرآن" href="#" />
          <EachClass title="المرئيات" href="#maraiat" />
          </div>
        </div>

        {/* القسم الأيسر */}
        <div className="w-full md:w-10/12 bg-white p-4 py-8 space-y-5">
        
        {children}
        <div>
</div>

        </div>
      </div>
    </div>
  );
};

export default ThreeSectionDiv;
