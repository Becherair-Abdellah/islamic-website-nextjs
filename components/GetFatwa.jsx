import React from 'react'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'

const GetFatwa = ({title,desc,tags,date,id}) => {
  return (
    <Link href="/u/fatwa/1">
    <Card className=" relative rounded-none border-blue-950 border-2 w-full bg-gray-50">
        <span className='text-gray-700 absolute bottom-2 left-2'>ID : {id}</span>
    <CardHeader className="p-2">
      <CardTitle className="text-sm md:text-lg text-[#015f6c] p-0 m-0 cursor-pointer">
        {title}
      </CardTitle>
      <CardDescription className="text-black text-sm md:text-lg">
        {desc}
      </CardDescription>
    </CardHeader>
    <CardFooter className="p-2  text-sm md:text-md text-gray-600">
      <p>تاريخ النشر : {date}</p>

      
    </CardFooter>
    <div className="flex flex-wrap gap-2 m-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 border-[1px] border-[#015f6c] text-blue-800 text-xs md:text-sm font-semibold px-2.5 py-0.5 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
  </Card>
    </Link>
  )
}

export default GetFatwa
