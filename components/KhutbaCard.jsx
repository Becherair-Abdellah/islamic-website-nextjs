import Link from 'next/link';
import React from 'react';

const KhutbaCard = ({ title, deliveryDate, publishDate, tags }) => {
  return (
    <div className="rounded-none border-blue-950 border-2 bg-gray-50">
      <div className="p-2">
    <Link href="/u/khotab/1">
    <h2 className="text-sm md:text-lg font-bold mb-2 text-[#015f6c] p-0 hover:underline transition m-0 cursor-pointer">{title}</h2>
    </Link>
        <p className="text-black text-sm md:text-md mb-2">تاريخ الإلقاء: <span className='mr-1'>{deliveryDate}</span></p>
        <p className="text-gray-600 text-sm md:text-md">تاريخ النشر: {publishDate}</p>
      </div>
      <div className="p-2 flex flex-wrap gap-2 mb-0">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 border-[1px] border-[#015f6c] text-blue-800 text-xs md:text-sm font-semibold px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-right p-2 text-sm md:text-md text-gray-600 flex items-center justify-end border-blue-950">
        <button className="p-1 border-2 border-blue-950 text-sm md:text-md text-blue-950 hover:bg-[#015f6c] hover:text-white cursor-pointer">
          قراءة المزيد
        </button>
      </div>
    </div>
  );
};

export default KhutbaCard;
