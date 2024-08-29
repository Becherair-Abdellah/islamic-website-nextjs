"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CustomCard from "../CustomCard";
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
import { useRouter, useSearchParams } from "next/navigation";
import ROWFatwa from "@/components/ROWFatwa";
import { fetchFatwasWithPagination } from "@/lib/actions/fatwa-actions";
const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const pathSegments = router.pathname.split('/');
  console.log(router)
  // const userId = pathSegments[pathSegments.length - 1];
  const searchTerm = searchParams.get('type');
  const userId = searchParams.get('userid');
   const  PAGE_SIZE = 5;
  const [page,setPage] = useState(1);
  const [loading,setLoaing] = useState(true);
  // all users / limit
  const [totalPages, setTotalPages] = useState(5);
  const [allFatwas,setFatwas] = useState();
  const [userData,setUserData] = useState();


const get_all_fatwas = async()=>{
  try {
    const {paginatedFatwas,userData} = await fetchFatwasWithPagination(userId,page,PAGE_SIZE);
    setLoaing(false);
    setFatwas(paginatedFatwas);
    setUserData(userData);
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
    get_all_fatwas();
  },[page])
  return (
    <main className="flex bg-gray-50 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:gap-8 bg-white">
        <Card className="xl:col-span-2 overflow-hidden" x-chunk="dashboard-01-chunk-4">
          <CardHeader className="flex justify-between flex-row items-center">
            <div className="grid gap-2 text-[#015f6c]">
              <CardTitle
              > 
              
              {searchTerm === 'fatwa'? 'الفتاوى' :""  }
              {searchTerm === 'book'? 'الكتب' :""  }
              {searchTerm === 'sound'? 'الصوتيات' :""  }
              {searchTerm === 'video'? 'الفيديوهات' :""  }
              {searchTerm === 'comment'? 'التعليقات' :""  }



              </CardTitle>
              <CardDescription>
               جميع  {searchTerm === 'fatwa'? 'الفتاوى' :""  || searchTerm === 'book'? 'الكتب' :"" || searchTerm === 'sound'? 'الصوتيات' :"" || searchTerm === 'video'? 'الفيديوهات' :"" || searchTerm === 'comment'? 'التعليقات' :"" } المسجلة للمستخدم  {userData?.username} في المنصة
              </CardDescription>
            </div>

<div className="flex items-center gap-3">
<div className="bg-[#015f6c] text-white p-2  rounded-md cursor-pointer font-bold" onClick={()=>{
              setLoaing(true);
              get_all_fatwas();
            }}>
            <IoMdRefresh size={25} color="text-[#015f6c]" className="" />
            </div>

          <CreateAdmin/>
</div>
          </CardHeader>

          <CardContent>
          
          <div className="overflow-x-auto w-full">
            {loading?<IoMdRefresh size={25} color="text-[#015f6c]" className="w-full text-center animate-spin_fast text-[#015f6c]" />:

            <>
            { searchTerm=== 'fatwa' && <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                الرقم
              </th>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                السؤال
              </th>
              <th scope="col" className="px-6 py-3 text-right text-md font-medium text-gray-500 uppercase">
                 عنوان الفتوى
              </th>
            
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الحالة
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                تاريخ النشر
              </th>
              <th scope="col" className="px-6 py-3 text-center text-md font-medium text-gray-500 uppercase">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* الصف الأول */}
           {allFatwas?.map((fatwa,index)=>
             (
              // <ROW FATWA={true} key={index} ID={user.id} EMAIL={user.email} NAME={user.username} F={user.fatwasCount} B={user.booksCount} V={user.videosCount} S={user.soundsCount} C={user.commentsCount}/>

              <ROWFatwa  key={index} ID={fatwa?.id} TITLE={fatwa?.title} ANSWER={fatwa?.answer} QUESTION={fatwa?.question}  S={"pending"} P={fatwa?.date}/>

            
           ))}
            {/* يمكنك إضافة المزيد من الصفوف بنفس الطريقة */}
          </tbody>
            </table>}



            { searchTerm=== 'book' && <table className="min-w-full divide-y divide-gray-200">
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
              <ROW key={index} ID={user.id} EMAIL={user.email} NAME={user.username} F={user.fatwasCount} B={user.booksCount} V={user.videosCount} S={user.soundsCount} C={user.commentsCount}/>

            
           ))}
            {/* يمكنك إضافة المزيد من الصفوف بنفس الطريقة */}
          </tbody>
            </table>}
            </>
            
            
            
            }
          
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
