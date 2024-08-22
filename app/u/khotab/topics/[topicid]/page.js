import GetFatwa from '@/components/GetFatwa'
import KhutbaCard from '@/components/KhutbaCard'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <KhutbaCard
        title="خطبة عن الصبر في مواجهة الشدائد"
        deliveryDate="15 أغسطس 2024"
        publishDate="20 أغسطس 2024"
        tags={["دين", "إيمان", "صبر"]}
      />
</div>
  )
}

export default page
