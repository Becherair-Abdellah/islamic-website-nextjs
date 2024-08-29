import React from 'react';

const PrivacyPolicy = () => {
  return (
  <>
    <div className="flex-grow flex items-center justify-center h-[250px] border-t-2 bg-[#015f6c]">
    <h1 className="text-4xl md:text-6xl font-bold text-white">سياسة الخصوصية</h1>
  </div>
    <div className="max-w-6xl mx-auto p-6">
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">المقدمة</h2>
        <p className="text-gray-700 leading-relaxed">
          نحن نقدر خصوصيتك ونسعى لحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عندما تستخدم خدماتنا.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">جمع المعلومات</h2>
        <p className="text-gray-700 leading-relaxed">
          نقوم بجمع المعلومات الشخصية التي تقدمها لنا مباشرة عند التسجيل في الموقع، مثل الاسم، البريد الإلكتروني، ورقم الهاتف. كما يمكن جمع معلومات أخرى تلقائيًا مثل عنوان IP وملفات تعريف الارتباط (Cookies).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">استخدام المعلومات</h2>
        <p className="text-gray-700 leading-relaxed">
          نستخدم المعلومات التي نجمعها لتحسين خدماتنا وتخصيص تجربتك على الموقع. قد نستخدم معلوماتك للتواصل معك حول العروض الخاصة، تحديثات الموقع، أو الاستفسارات.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
        <p className="text-gray-700 leading-relaxed">
          نتبع إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف. لكن يرجى العلم بأنه لا يوجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100%.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
        <p className="text-gray-700 leading-relaxed">
          لديك الحق في الوصول إلى معلوماتك الشخصية وتحديثها أو حذفها. يمكنك أيضًا إلغاء الاشتراك من رسائل البريد الإلكتروني الترويجية في أي وقت.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">التغييرات في سياسة الخصوصية</h2>
        <p className="text-gray-700 leading-relaxed">
          قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة، لذا يرجى مراجعتها بانتظام.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-gray-700">
          إذا كانت لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا عبر [إدخال وسيلة الاتصال هنا].
        </p>
      </footer>
    </div>
  </>
  );
};

export default PrivacyPolicy;
