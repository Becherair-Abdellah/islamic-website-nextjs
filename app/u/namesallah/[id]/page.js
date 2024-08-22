import ContentClass from "@/components/ContentClass";
import EachClass from "@/components/EachClass";
import VideoSection from "@/components/VideoSection";
import React from "react";

const ThreeSectionDiv = () => {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-screen-xl">
      {/* القسم العلوي */}
      <div className="flex-grow flex items-center justify-center h-[250px] border-t-2 bg-blue-900">
        <h1 className="text-4xl md:text-6xl font-bold text-white">الملك</h1>
      </div>

      {/* القسمان السفليان */}
      <div className="flex flex-col md:flex-row">
        {/* القسم الأيمن */}
        <div className="w-full md:w-3/12  p-4 border-l-2">
        <h2 className="p-2 border-2 text-xs md:text-sm border-blue-950 bg-blue-900 text-white cursor-pointer  mt-2 font-bold text-center mb-3">
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
        <ContentClass title="التعريف بالإسم"/>
        <ContentClass title="المرئيات"/>
        <ContentClass title="في السنة"/>

        <div>
<a href="maraiat"></a>
    <div >
      {/* العنوان الكبير */}
      <h2 className="text-2xl text-blue-900 md:text-4xl font-bold mb-4">
       المرئيات
      </h2>
      {/* المحتوى */}
      <div className="text-sm md:text-md mt-6 text-blue-900">
        <p className="text-lg">
        يحرص مشروع سلام على إتاحة العديد من المواد بشكل مجاني لكل المهتمين به. نرجو أن تستمتع بهذه المجموعة من المقاطع التعريفية، والبرامج الصوتية والمرئية، والمحاضرات المُسجلة، واللقاءات الإعلامية. 
        </p>
        <div className="p-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <VideoSection
            title="فضل أسماء الله الحسنى"
            videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
          />
          <VideoSection
            title="فضل أسماء الله الحسنى"
            videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
          />
          <VideoSection
            title="فضل أسماء الله الحسنى"
            videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
          />
        </div>
      </div>
      </div>
    </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default ThreeSectionDiv;
