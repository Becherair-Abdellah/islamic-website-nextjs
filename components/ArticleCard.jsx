import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ArticleCard = ({ title, description, tags, publicationDate, imageUrl }) => {
  return (
    <div className="border border-gray-300 rounded-lg  overflow-hidden flex flex-col sm:flex-row">
      <img   src={imageUrl} alt={title} className="w-full sm:w-48  h-48 object-fill flex-shrink-0" />
     
      <div className="p-4 flex-grow">
      <Link href="/u/articles/1" >
        <h2 className="text-xl font-bold text-blue-900 mb-2 hover:underline cursor-pointer">{title}</h2></Link>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-600 mb-2">تاريخ النشر: {publicationDate}</p>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
