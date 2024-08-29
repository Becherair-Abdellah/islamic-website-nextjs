"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "./CustomCard";
import { MdOutlineSick } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { useEffect, useState } from "react";
import ROW from "@/components/ROW";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  import { IoMdRefresh } from "react-icons/io";
  import { getUsers } from "@/lib/actions/register-user";
  import { FaPlus } from "react-icons/fa6";
import CreateAdmin from "@/components/CreateAdmin";
const Page = () => {
   const  PAGE_SIZE = 5;
  const [page,setPage] = useState(1);
  const [loading,setLoaing] = useState(true);
  // all users / limit
  const [totalPages, setTotalPages] = useState(5);
  const [allUsers,setUsers] = useState();


const get_all_users = async()=>{
  try {
    const users = await getUsers(page,PAGE_SIZE);
    setLoaing(false);
    setUsers(users)
  } catch (error) {
    console.log(error);
  }

}

  // previos and next buttons
  const handleNextPage = () => {
    if (page < totalPages) {
        setPage((prevPage) => prevPage + 1);
      }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  useEffect(()=>{
    get_all_users();
  },[page])
  return (
    <main className="flex bg-gray-50 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <CustomCard nbr="150" title="المستخدمين" />
      <CustomCard nbr="15" title="الفتاوى" />
                <CustomCard nbr="30" title="الفيديوهات" />
                <CustomCard nbr="45" title="الكتب" />
                <CustomCard nbr="150" title="التعليقات" />
      <CustomCard nbr="15" title="المسؤلين" />
                <CustomCard nbr="30" title="الفيديوهات" />
                <CustomCard nbr="45" title="الكتب" />
      </div>
      <div className="grid gap-4 md:gap-8 bg-white">
        <Card className="xl:col-span-2 overflow-hidden" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex justify-between flex-row items-center">
            <div className="grid gap-2 text-[#015f6c]">
              <CardTitle>المستخدمين</CardTitle>
              <CardDescription>
               جميع المستخدمين المسجلين في المنصة
              </CardDescription>
            </div>

<div className="flex items-center gap-3">
<div className="bg-[#015f6c] text-white p-2  rounded-md cursor-pointer font-bold" onClick={()=>{
              setLoaing(true);
              get_all_users();
            }}>
            <IoMdRefresh size={25} color="text-[#015f6c]" className="" />
            </div>

          <CreateAdmin/>
</div>
          </CardHeader>

          <CardContent>
          
          <div className="overflow-x-auto w-full">
            {loading?<IoMdRefresh size={25} color="text-[#015f6c]" className="w-full text-center animate-spin_fast text-[#015f6c]" />:<table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                الرقم
              </th>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                البريد الإلكتروني
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الفتاوى
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الكتب
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الصوتيات 
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الفيديوهات
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                التعليقات
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* الصف الأول */}
           {allUsers?.map((user,index)=>
             (
              <ROW  key={index} ID={user.id} EMAIL={user.email} NAME={user.username} F={user.fatwasCount} B={user.booksCount} V={user.videosCount} S={user.soundsCount} C={user.commentsCount}/>

            
           ))}
            {/* يمكنك إضافة المزيد من الصفوف بنفس الطريقة */}
          </tbody>
        </table>}
          
          </div>
      
  </CardContent>
            {/* pagination  */}
            <div className="grid my-5 gap-2">
            <Pagination>
  <PaginationContent>
    <span className="text-gray-500 ">10 مستخدم  </span>
    <PaginationItem className="bg-[#015f6c] text-white font-bold rounded-md cursor-pointer">
      <PaginationNext onClick={()=>{
       handleNextPage();
      }} disabled={page === totalPages}/>
    </PaginationItem>

    <PaginationItem>
      <div className=" bg-white rounded-md border">
      <PaginationLink href="#" className="text-primaryColor font-bold">{page}</PaginationLink>
      </div>
    </PaginationItem>

    <PaginationItem className="bg-[#015f6c] text-white font-bold rounded-md cursor-pointer">
      <PaginationPrevious onClick={()=>{
       handlePreviousPage();
      }} disabled={page === 1} />
    </PaginationItem>
    
      <span className="text-gray-500 ">من أصل 5 صفحات</span>
  </PaginationContent>
</Pagination>

            </div>
        </Card>
      </div>
    </main>
  );
};

export default Page;
