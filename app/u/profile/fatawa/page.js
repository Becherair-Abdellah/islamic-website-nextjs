import FatwaElement from '@/components/FatwaElement'
import React from 'react'

const page = () => {
  return (
 <>
   <h1 className="text-center font-bold text-xl my-4 text-[#015f6c]">جميع الفتاوى المعلقة</h1>

<div className='max-w-xl mx-auto p-2 flex flex-col gap-3 py-6 '>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
  <FatwaElement  ID={12} QUESTION={"كيف يمكننا ان نقول بأن الإنتصار هو نوع من انواع النجاح"} title={"ماهو مفهوم الأنتصار"}/>
</div>
</>
  )
}

export default page
