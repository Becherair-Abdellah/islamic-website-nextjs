'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  
const CardSalaf = ({title,desc,date}) => {
  return (
    <Card className="rounded-none border-blue-950 border-2 bg-gray-50">
  <CardHeader className="p-2">
    <CardTitle className="text-sm md:text-md text-[#015f6c] p-0 m-0 cursor-pointer">{title}</CardTitle>
    <CardDescription className="text-blacktext-sm md:text-md">{desc}</CardDescription>
  </CardHeader>
  <CardFooter className="text-right p-2 text-sm md:text-md text-gray-600 flex items-center justify-between">
    <p>تاريخ النشر : {date}</p>
    <p className="p-1 border-2 text-sm md:text-md border-blue-950  hover:bg-[#015f6c] hover:text-white cursor-pointer">قراءة المزيد</p>
  </CardFooter>
</Card>

  )
}

export default CardSalaf
