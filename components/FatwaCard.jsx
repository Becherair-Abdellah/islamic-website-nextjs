'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
  const FatwaCard = ({ title, desc, date, tags }) => {
    return (
        <div className="flex flex-col items-start ">
        <Card className="rounded-none border-blue-950 border-2 w-full bg-gray-50">
          <CardHeader className="p-2">
            <CardTitle className="text-sm md:text-md text-[#015f6c] p-0 m-0 cursor-pointer">
              {title}
            </CardTitle>
            <CardDescription className="text-black text-sm md:text-md">
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
                  className="bg-blue-200 text-blue-800 text-xs md:text-sm font-semibold px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
        </Card>
        <p className="p-2 border-2 text-xs md:text-sm border-blue-950 hover:bg-[#015f6c] hover:text-white cursor-pointer  mt-2">
          قراءة المزيد
        </p>
      </div>
    );
  };
  
  export default FatwaCard;
  
