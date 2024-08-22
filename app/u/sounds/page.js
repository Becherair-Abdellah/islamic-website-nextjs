import CollectionTitle from '@/components/CollectionTitle'
import GetFatwa from '@/components/GetFatwa'
import LectureCard from '@/components/SoundCard'
import React from 'react'

const page = () => {
  return (
<>

<div className="w-full h-full flex flex-col gap-2">
<LectureCard
        title="شرح رياض الصالحين"
        lectureNumber="72"
        url="/v.mp3"
        bookName="كتاب الفضائل"
        publicationDate="2024-08-14"
        lecturer="إبراهيم الرحيل"
        tags={['العقيدة', 'الفقه', 'الحديث']} // تمرير الوسوم إلى المكون
      />

<LectureCard
        title="شرح رياض الصالحين"
        lectureNumber="72"
        url="/v.mp3"
        bookName="كتاب الفضائل"
        publicationDate="26"
        lecturer="إبراهيم الرحيل"
        tags={['العقيدة', 'الفقه', 'الحديث']} // تمرير الوسوم إلى المكون
      />

<LectureCard
        title="شرح رياض الصالحين"
        lectureNumber="72"
        url="/v.mp3"
        bookName="كتاب الفضائل"
        publicationDate="26"
        lecturer="إبراهيم الرحيل"
        tags={['العقيدة', 'الفقه', 'الحديث']} // تمرير الوسوم إلى المكون
      />
</div>
</>
  )
}

export default page
