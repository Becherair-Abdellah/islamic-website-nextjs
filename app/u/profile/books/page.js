import BookElement from '@/components/BookElement'
import FatwaElement from '@/components/FatwaElement'
import React from 'react'

const page = () => {
  return (
 <>
   <h1 className="text-center font-bold text-xl my-4 text-[#015f6c]">جميع الكتب المعلقة</h1>

<div className='max-w-xl mx-auto p-2 flex flex-col gap-3 py-6 '>
  <BookElement  ID={12}  title={"صحيح البخاري 32"}/>
</div>
</>
  )
}

export default page
