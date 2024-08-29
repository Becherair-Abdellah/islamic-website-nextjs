import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const IsmAllah = ({ ismallah }) => {
  return (
   <div>
     <Card className=" relative bg-[#015f6c]  p-2 rounded-none  h-48 cursor-pointer text-white">
      <CardContent className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-center items-center text-4xl">
        <p>{ismallah}</p>
      </CardContent>
      <CardFooter className="absolute left-0 bottom-[0px] w-full flex items-center gap-3 p-2">
    <p className="bg-white text-center  text-[#015f6c] cursor-pointer w-full p-1">القرآن</p>
    <p className="bg-white text-center  text-[#015f6c] cursor-pointer w-full p-1">السنة</p>
  </CardFooter>
    </Card>
    <Button className="bg-white border-2 hover:text-white border-[#015f6c] text-[#015f6c] rounded-none py-0 mt-3">قراءة المزيد</Button>
   </div>
  );
};

export default IsmAllah;
