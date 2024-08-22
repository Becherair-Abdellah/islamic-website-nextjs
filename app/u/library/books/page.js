import BookCard from '@/components/BookCard'
import GetFatwa from '@/components/GetFatwa'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
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
  )
}

export default page
