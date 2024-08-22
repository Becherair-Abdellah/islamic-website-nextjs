import React from 'react';
import VideoSection from './VideoSection';
import LectureCard from './SoundCard';
import BookCard from './BookCard';

const Section = ({ title, boxes, custom }) => (
  <div>
    <h2 className="text-2xl font-bold mb-5 text-blue-900">{title}</h2>
    <div className={`grid grid-cols-1 ${custom ? '' : 'sm:grid-cols-2 lg:grid-cols-3'} gap-5`}>
      {boxes.map((box, index) => (
        <div key={index} className="">
          {box}
        </div>
      ))}
    </div>
  </div>
);

const Mawso3a = () => (
  <div className="max-w-screen-lg mx-auto p-5 space-y-10">
    <Section
      title="المرئيات"
      boxes={[
        <VideoSection
          key="video1"
          title="فضل أسماء الله الحسنى"
          videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
        />,
        <VideoSection
          key="video2"
          title="فضل أسماء الله الحسنى"
          videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
        />,
        <VideoSection
          key="video3"
          title="فضل أسماء الله الحسنى"
          videoUrl="https://www.youtube.com/embed/_-hrqjVFIx4?si=y8kuc_wAtD2MtuCd"
        />
      ]}
    />
    <Section
      title="الصوتيات"
      boxes={[
        <LectureCard
          key="lecture1"
          title="شرح رياض الصالحين"
          lectureNumber="72"
          url="/v.mp3"
          bookName="كتاب الفضائل"
          publicationDate="2024-08-14"
          lecturer="إبراهيم الرحيل"
          tags={['العقيدة', 'الفقه', 'الحديث']}
        />,
        <LectureCard
          key="lecture2"
          title="شرح رياض الصالحين"
          lectureNumber="72"
          url="/v.mp3"
          bookName="كتاب الفضائل"
          publicationDate="2024-08-14"
          lecturer="إبراهيم الرحيل"
          tags={['العقيدة', 'الفقه', 'الحديث']}
        />,
        <LectureCard
          key="lecture3"
          title="شرح رياض الصالحين"
          lectureNumber="72"
          url="/v.mp3"
          bookName="كتاب الفضائل"
          publicationDate="2024-08-14"
          lecturer="إبراهيم الرحيل"
          tags={['العقيدة', 'الفقه', 'الحديث']}
        />
      ]}
    />
    <Section
      custom="true"
      title="الكتب"
      boxes={[
        <BookCard
          key="book1"
          title="صحيح البخاري"
          desc="هذا الكتاب يقدم مقدمة شاملة للبرمجة بلغة JavaScript ويشمل أمثلة وتمارين تطبيقية."
          downloads="1234"
          imgSrc="/next.bmp"
        />,
        <BookCard
          key="book2"
          title="صحيح البخاري"
          desc="هذا الكتاب يقدم مقدمة شاملة للبرمجة بلغة JavaScript ويشمل أمثلة وتمارين تطبيقية."
          downloads="1234"
          imgSrc="https://via.placeholder.com/150"
        />,
        <BookCard
          key="book3"
          title="صحيح البخاري"
          desc="هذا الكتاب يقدم مقدمة شاملة للبرمجة بلغة JavaScript ويشمل أمثلة وتمارين تطبيقية."
          downloads="1234"
          imgSrc="https://via.placeholder.com/150"
        />
      ]}
    />
  </div>
);

export default Mawso3a;
