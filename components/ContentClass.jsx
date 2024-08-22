import React from "react";

const ContentClass = ({ title, content,href }) => {
  return (
<div>
<a href={href}></a>
    <div >
      {/* العنوان الكبير */}
      <h2 className="text-2xl text-blue-900 md:text-4xl font-bold mb-4">
       {title}
      </h2>
      {/* المحتوى */}
      <div className="text-sm md:text-md mt-6 text-blue-900">
        {/* {content} */}
        <p className="text-lg">
          الملك من له المُلك. والمُلك تصرّف عام مقيّد بالعدل والإحسان في كل عطاء
          وحرمان، ونصر وخذلان، وضر ونفع، وخفض ورفع، وإعزاز وإذلال. وثمرة معرفته
          خوف ورجاء، وإجلال وطاعة وإذعان، والتخلق لمن بُلي به التقيد باتباع الحق
          في موارده ومصادره، بمنع من يستحق المنع، ورفع من يستحق الرفع، وقهر من
          يستحق القهر، وجبر من يستحق الجبر، وضر من يستحق الضر، وإكرام من يستحق
          الإكرام، والانتقام ممن يستوجب الانتقام، وإطعام الجوعان، وكسوة العريان،
          وسقي الظمآن، وإغاثة اللهفان، وقمع أهل الظلم والعدوان، وأخذ الأموال
          بحقها، وصرفها في مستحقها. فمن فعل ذلك أدبه الله في ظله يوم لا ظل إلا
          ظله، والمقسطون على منابر من نور عن يمين الرحمن. وإنما طلب سليمان
          المُلك لما فيه من البر والإحسان. ولمثله قال يوسف عليه السلام
          “اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ”، وشكر الله على ما آتاه من
          المُلك فقال: “رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ” (يوسف: 101)
        </p>

        <p className="text-lg mt-8">
          الملك من له المُلك. والمُلك تصرّف عام مقيّد بالعدل والإحسان في كل عطاء
          وحرمان، ونصر وخذلان، وضر ونفع، وخفض ورفع، وإعزاز وإذلال. وثمرة معرفته
          خوف ورجاء، وإجلال وطاعة وإذعان، والتخلق لمن بُلي به التقيد باتباع الحق
          في موارده ومصادره، بمنع من يستحق المنع، ورفع من يستحق الرفع، وقهر من
          يستحق القهر، وجبر من يستحق الجبر، وضر من يستحق الضر، وإكرام من يستحق
          الإكرام، والانتقام ممن يستوجب الانتقام، وإطعام الجوعان، وكسوة العريان،
          وسقي الظمآن، وإغاثة اللهفان، وقمع أهل الظلم والعدوان، وأخذ الأموال
          بحقها، وصرفها في مستحقها. فمن فعل ذلك أدبه الله في ظله يوم لا ظل إلا
          ظله، والمقسطون على منابر من نور عن يمين الرحمن. وإنما طلب سليمان
          المُلك لما فيه من البر والإحسان. ولمثله قال يوسف عليه السلام
          “اجْعَلْنِي عَلَىٰ خَزَائِنِ الْأَرْضِ”، وشكر الله على ما آتاه من
          المُلك فقال: “رَبِّ قَدْ آتَيْتَنِي مِنَ الْمُلْكِ” (يوسف: 101)
        </p>
      </div>
    </div>
</div>
  );
};

export default ContentClass;
