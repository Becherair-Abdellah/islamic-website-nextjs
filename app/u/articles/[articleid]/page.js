import React from 'react'

const page = () => {
  return (
    <div className="mt-12 mb-12 space-y-24 mx-auto max-w-screen-xl">
     <div className="bg-white border border-gray-200 p-6 rounded-md  w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          هل يجوز الحلف بعبارة (أحلف بمن أحل القسم)؟
        </h1>
        <div className="text-sm text-gray-500">
          <span>رقم الفتوى: 518794</span> |  
          <span> تاريخ النشر: 2023-09-20</span>
        </div>
      </div>
      <div className="bg-green-50 p-5 rounded-md mb-6">
        <h2 className="text-xl font-semibold text-green-700 mb-3">السؤال</h2>
        <p className="text-gray-700 leading-relaxed">
          هل يجوز الحلف بقول: “أقسم بمن أحل القسم”؟
        </p>
      </div>

      <div className="bg-gray-50 p-5 rounded-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">الجواب</h2>
        <p className="text-gray-700 leading-relaxed">
          الحمد لله والصلاة والسلام على رسول الله وعلى آله وصحبه، أما بعد:
          <br /><br />
          نعم، يجوز الحلف بمن أحل القسم؛ لأن الذي أحل القسم هو الله عز وجل، فهذه عبارة أخرى عن الحلف بالله تعالى، والحلف بالله جائز. ولكن ينبغي للمسلم أن يحفظ أيمانه، ولا يكثر من الحلف، لقوله تعالى [المائدة: 89].
          <br /><br />
          والله أعلم.
        </p>
      </div>

    </div>
    </div>
  )
}

export default page
