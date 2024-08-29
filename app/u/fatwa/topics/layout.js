export default function Topic({ children }) {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl ">
      {/* القسم العلوي */}

      <div className="mt-8 px-4">
        <BtnSection value=" جميع الفتاوى" />
      </div>

      {/* القسمان السفليان */}
      <div className="flex flex-col md:flex-row">
        {/* القسم الأيمن */}
        <div className="w-full md:w-3/12  p-4 border-l-2">
          <h2 className="p-2 border-2 text-xs md:text-sm border-blue-950 bg-[#015f6c] text-white cursor-pointer  mt-2 font-bold text-center mb-3">
            مجموعات الفتاوى
          </h2>
          <div className="grid grid-cols-1 gap-1">
            <EachClass title="التعريف بالإسم" href="#" />
            <EachClass title="في السنة" href="#" />
            <EachClass title="في القرآن" href="#" />
            <EachClass title="المرئيات" href="#maraiat" />
            <EachClass title="التعريف بالإسم" href="#" />
            <EachClass title="في السنة" href="#" />
            <EachClass title="في القرآن" href="#" />
            <EachClass title="المرئيات" href="#maraiat" />
          </div>
        </div>

        {/* القسم الأيسر */}
        <div className="w-full md:w-10/12 bg-white p-4 py-8 space-y-5">
        <CollectionTitle title="العقيدة" desc="يعرض الموضوعات التي تتعلق بما يجب على المسلم اعتقاده في حق الله سبحانه وبقية أركان الإيمان الستة وغيرها من الأمور الغيبية، وما ينبغي الحذر منه مما يضاد تلك العقيدة ويخالفها"/>

          {children}
          <div></div>
        </div>
      </div>
    </div>
  );
}

import BtnSection from "@/components/BtnSection";
import CollectionTitle from "@/components/CollectionTitle";
import ContentClass from "@/components/ContentClass";
import CustomBtn from "@/components/CustomBtn";
import EachClass from "@/components/EachClass";
import VideoSection from "@/components/VideoSection";
import React from "react";
