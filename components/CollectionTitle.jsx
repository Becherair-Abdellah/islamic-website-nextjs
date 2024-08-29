import React from 'react'

const CollectionTitle = ({title,desc}) => {
  return (
    <div className="bg-gray-100 p-4 w-full text-cenetr">
    <h2 className="text-[#015f6c] text-xl w-full text-center font-bold mb-2">
      {title}
    </h2>
    <p className="text-gray-700 text-center">
        {desc}
    </p>
  </div>
  )
}

export default CollectionTitle
