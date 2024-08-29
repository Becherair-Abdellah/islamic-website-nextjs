import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const IsmAllah = ({ ismallah,href }) => {
  return (
    
    <Link href={`namesallah/${href}`} >
    <Card className=" relative bg-[#015f6c]  p-2 rounded-none  h-48 cursor-pointer text-white">
     <CardContent className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-4xl">
       <p>{ismallah}</p>
     </CardContent>
   </Card>
    </Link>
  );
};

const AsmaAllah = () => {
  const asmaAllah = [
    "الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن", "المهيمن", 
    "العزيز", "الجبار", "المتكبر", "الخالق", "البارئ", "المصور", "الغفار", 
    "القهار", "الوهاب", "الرزاق", "الفتاح", "العليم", "القابض", "الباسط", 
    "الخافض", "الرافع", "المعز", "المذل", "السميع", "البصير", "الحكم", 
    "العدل", "اللطيف", "الخبير", "الحليم", "العظيم", "الغفور", "الشكور", 
    "العلي", "الكبير", "الحفيظ", "المقيت", "الحسيب", "الجليل", "الكريم", 
    "الرقيب", "المجيب", "الواسع", "الحكيم", "الودود", "المجيد", "الباعث", 
    "الشهيد", "الحق", "الوكيل", "القوي", "المتين", "الولي", "الحميد", 
    "المحصي", "المبدئ", "المعيد", "المحيي", "المميت", "الحي", "القيوم", 
    "الواجد", "الماجد", "الواحد", "الصمد", "القادر", "المقتدر", "المقدم", 
    "المؤخر", "الأول", "الآخر", "الظاهر", "الباطن", "الوالي", "المتعالي", 
    "البر", "التواب", "المنتقم", "العفو", "الرؤوف", "مالك الملك", 
    "ذو الجلال والإكرام", "المقسط", "الجامع", "الغني", "المغني", "المانع", 
    "الضار", "النافع", "النور", "الهادي", "البديع", "الباقي", "الوارث", 
    "الرشيد", "الصبور"
  ];

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-2xl md:text-5xl my-8 mb-12 text-center font-bold text-[#015f6c] ">
        أسماء الله الحسنى
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {asmaAllah.map((name, index) => (
          <IsmAllah key={index} href={index+1} ismallah={name} />
        ))}
      </div>
    </div>
  );
};

export default AsmaAllah;
