import React from 'react';

const IslamQA = () => {
  return (
    <div className='bg-green-50'>
    <div className="flex-grow flex items-center justify-center h-[250px] border-t-2 bg-[#015f6c]">
        <h1 className="text-4xl md:text-6xl font-bold text-white">عن الموقع</h1>
      </div>

   <div className=" p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">موقع الإسلام </h2>
      
      <section className="mb-4">
        <p className="font-semibold">الرؤية:</p>
        <p>موسوعة معرفية عن الإسلام</p>
      </section>

      <section className="mb-4">
        <p className="font-semibold">الرسالة:</p>
        <p>
          موقع الإسلام سؤال وجواب موقع دعوي، علمي، تربوي. يهدف إلى تقديم الاستشارات والإجابات العلمية الموثقة بشكل وافٍ وميسر، 
          ويقوم بالإشراف على هذه الإجابات الشيخ محمد صالح المنجد حفظه الله.
        </p>
      </section>

      <section className="mb-4">
        <p>
          يرحب الموقع بأسئلة من جميع السائلين سواءً غير مسلم في الأمور الشرعية أو النفسية والاجتماعية.
        </p>
      </section>

      <section className="mb-4">
        <p className="font-semibold">أهداف الموقع:</p>
        <ul className="list-disc pl-5">
          <li>نشر الإسلام والدعوة إليه.</li>
          <li>نشر العلم الشرعي ورفع الجهل عن المسلمين.</li>
          <li>تلبية حاجة الناس في تقديم الاستشارات وإجابات عن مختلف التخصصات الشرعية.</li>
          <li>توجيه الناس في القضايا الحياتية بتقديم الاستشارات العلمية والتربوية والاجتماعية وغيرها.</li>
        </ul>
      </section>

      <section className="mb-4">
        <p className="font-semibold">منهج الموقع:</p>
        <p>
          يقوم الموقع على عدة أسس منها الدعوة، واتباع السلف الصالح، ويجتهد أن تكون الإجابات مبنية على الدليل من القرآن الكريم 
          والسنة النبوية الصحيحة وأقوال العلماء، والاعتماد على المراجع الموثوقة، وإجماع أهل العلم، واحترام الآراء المختلفة في 
          مختلف التخصصات الشرعية.
        </p>
        <p>
          ينأى الموقع بنفسه عن الأمور المشتبهات والسباب والشتم والجدل العقيم.
        </p>
        <p>
          نتمنى أن نكون عند ثقتكم وأن نقدم ما يرضي الله عز وجل وينفع الناس والله المستعان.
        </p>
      </section>
    </div>
    </div>
  );
};

export default IslamQA;
