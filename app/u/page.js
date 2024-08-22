import BookCard from "@/components/BookCard";
import CardSalaf from "@/components/CardSalaf";
import CustomBtn from "@/components/CustomBtn";
import FatwaCard from "@/components/FatwaCard";
import IsmAllah from "@/components/IsmAllah";
import KhutbaCard from "@/components/KhutbaCard";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";
import React from "react";

const Page = () => {
  return (
    <div className="mt-12 mb-12 space-y-24 mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row ">
        {/* الجزء الأيمن */}
        <div className="w-full md:w-7/12 p-4">
          <CustomBtn value="أسماء الله الحسنى" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            <IsmAllah ismallah="الرحمن" />
            <IsmAllah ismallah="الرحيم" />
            <IsmAllah ismallah="الملك" />
            <IsmAllah ismallah="الرحمن" />
            <IsmAllah ismallah="الرحيم" />
            <IsmAllah ismallah="الملك" />
          </div>
        </div>
        {/* الجزء الأيسر */}
        <div className="w-full md:w-5/12 p-4">
          <CustomBtn value="أحوال السلف مع أسماء الله الحسنى" />
          <div className="grid grid-cols-1 gap-8 mt-6">
            <CardSalaf
              title="خلق التواضع"
              desc="يقول ابن القيم رحمه الله تعالى: «إن التواضع يتولد من بين العلم بالله سبحانه ومعرفة أسمائه وصفاته ونعوت جلاله وتعظيمه "
              date="21-08-2024"
            />
            <CardSalaf
              title="خلق التواضع"
              desc="يقول ابن القيم رحمه الله تعالى: «إن التواضع يتولد من بين العلم بالله سبحانه ومعرفة أسمائه وصفاته ونعوت جلاله وتعظيمه "
              date="21-08-2024"
            />
            <CardSalaf
              title="خلق التواضع"
              desc="يقول ابن القيم رحمه الله تعالى: «إن التواضع يتولد من بين العلم بالله سبحانه ومعرفة أسمائه وصفاته ونعوت جلاله وتعظيمه "
              date="21-08-2024"
            />
          </div>
        </div>
      </div>

      <div className="p-4 ">
        <CustomBtn value="الفتاوى" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <FatwaCard
            title="ما الحكمة من آلام البهائم؟ "
            desc="لماذا تتعذب الحيوانات، وتعاني سكرات الموت، رغم أنها غير مكلفة ولن يكون لها أجر أو جزاء على هذا العذاب؟"
            date="2024-05-07"
            tags={["فتوى", "مسائل"]}
          />
          

          <FatwaCard
            title="ما الحكمة من آلام البهائم؟ "
            desc="لماذا تتعذب الحيوانات، وتعاني سكرات الموت، رغم أنها غير مكلفة ولن يكون لها أجر أو جزاء على هذا العذاب؟"
            date="2024-05-07"
            tags={["فتوى", "مسائل"]}
          />

          <FatwaCard
            title="ما الحكمة من آلام البهائم؟ "
            desc="لماذا تتعذب الحيوانات، وتعاني سكرات الموت، رغم أنها غير مكلفة ولن يكون لها أجر أو جزاء على هذا العذاب؟"
            date="2024-05-07"
            tags={["فتوى", "مسائل"]}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row ">
        {/* الجزء الأيمن */}
        <div className="w-full md:w-7/12 p-4">
          <CustomBtn value="أبرز الكتب" />
          <div className="grid grid-cols-1 gap-8 mt-6">
            <BookCard
              title="صحيح البخاري"
              desc="هذا الكتاب يقدم مقدمة شاملة للبرمجة بلغة JavaScript ويشمل أمثلة وتمارين تطبيقية."
              downloads="1234"
              imgSrc="https://via.placeholder.com/150"
            />

            <BookCard
              title="صحيح البخاري"
              desc="هذا الكتاب يقدم مقدمة شاملة للبرمجة بلغة JavaScript ويشمل أمثلة وتمارين تطبيقية."
              downloads="1234"
              imgSrc="https://via.placeholder.com/150"
            />
          </div>
        </div>
        {/* الجزء الأيسر */}
        <div className="w-full md:w-5/12 p-4">
          <CustomBtn value="أبرز الخطب" />
          <div className="grid grid-cols-1 gap-8 mt-6">
            <KhutbaCard
              title="خطبة عن الصبر في مواجهة الشدائد"
              deliveryDate="15 أغسطس 2024"
              publishDate="20 أغسطس 2024"
              tags={["دين", "إيمان", "صبر"]}
            />
            <KhutbaCard
              title="خطبة عن الصبر في مواجهة الشدائد"
              deliveryDate="15 أغسطس 2024"
              publishDate="20 أغسطس 2024"
              tags={["دين", "إيمان", "صبر"]}
            />
            <KhutbaCard
              title="خطبة عن الصبر في مواجهة الشدائد"
              deliveryDate="15 أغسطس 2024"
              publishDate="20 أغسطس 2024"
              tags={["دين", "إيمان", "صبر"]}
            />
          </div>
        </div>
      </div>

      <div className="p-4 ">
        <CustomBtn value="مقاطع الفيديو" />
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

      <div className="bg-gray-100 p-6 rounded-lg  mx-auto  w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4  text-center">
          هدفنا
        </h2>
        <p className="text-gray-700 text-lg mb-4 text-center font-semibold leading-8">
          الأسماء الحسنى هي الأسماء التي يطلقها المسلمون على الله تعالى، وهي
          تعبر عن كمال وجمال صفات الله. تتكون الأسماء الحسنى من تسعة وتسعين
          اسماً، وكل اسم منها يدل على صفة من صفات الله تعالى. من خلال فهم هذه
          الأسماء، يمكننا أن نكون أقرب إلى الله ونتعلم كيف نعيش حياتنا بناءً على
          القيم والمبادئ التي تعبر عنها هذه الأسماء.
        </p>
        <p className="text-gray-700 text-lg text-center font-semibold leading-8">
          هدفنا هو تقديم محتوى يتيح للمستخدمين التعرف على هذه الأسماء الحسنى
          وفهم معانيها وتطبيقها في حياتهم اليومية. نحن نهدف إلى خلق تجربة
          تعليمية مليئة بالمعرفة والتوجيه الروحي، مما يساعد الأفراد على تعزيز
          علاقتهم بالله وفهم أعمق لصفاته.
        </p>

        <p className="text-gray-700 text-lg mt-4 text-center font-semibold leading-8">
          الأسماء الحسنى هي الأسماء التي يطلقها المسلمون على الله تعالى، وهي
          تعبر عن كمال وجمال صفات الله. تتكون الأسماء الحسنى من تسعة وتسعين
          اسماً، وكل اسم منها يدل على صفة من صفات الله تعالى. من خلال فهم هذه
          الأسماء، يمكننا أن نكون أقرب إلى الله ونتعلم كيف نعيش حياتنا بناءً على
          القيم والمبادئ التي تعبر عنها هذه الأسماء.
        </p>
      </div>
    </div>
  );
};

export default Page;
