'use client'
const BookCard = ({ title, desc, downloads, imgSrc }) => {
    return (
      <div className="flex flex-col md:flex-row border-2 border-gray-300  p-4 items-start w-full">
      {/* صورة الكتاب */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-4 ml-8">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover rounded-md" />
      </div>
      {/* معلومات الكتاب */}
      <div className="w-full md:w-2/3">
        <h2 className="text-lg md:text-xl font-bold text-blue-900 mb-2">{title}</h2>
        <p className="text-gray-700 mb-2 text-sm md:text-base">{desc}</p>
        <p className="text-gray-600 mb-4 text-xs md:text-sm">عدد التنزيلات: {downloads}</p>
        
        {/* الأزرار */}
        <div className="flex flex-col justify-end md:flex-row gap-2 md:gap-4">
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md flex items-center text-sm w-full md:w-auto">
            <span className="ml-2">تحميل الكتاب</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l6 6m0 0l6-6m-6 6V4"
              />
            </svg>
          </button>
          <button className="bg-white border-2 border-blue-900 text-blue-900 px-4 py-2 flex items-center text-sm w-full md:w-auto">
            <span className="ml-2" onClick={()=>{
              handleReadClick();
            }}>قراءة الكتاب</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7h8m-4-4v16m-4-4h8m-4-4H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    );
  };
  
  export default BookCard;