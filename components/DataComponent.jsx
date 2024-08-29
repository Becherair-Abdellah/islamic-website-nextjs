import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import FatwaElement from "./FatwaElement"
  
const DataComponent = ({title,nbrElement ,Fatwa,Book}) => {
  return (
    <div className='flex justify-between items-center p-2'>
     
     <AlertDialog >
  <AlertDialogTrigger>  {title}  </AlertDialogTrigger>
  <AlertDialogContent >
    <AlertDialogHeader>

      <div className="flex flex-col gap-1">
        {Fatwa && <>
            <FatwaElement Fatwa ID={120} QUESTION={"ماهي أسس العقيدة الإسلامية"}/>
            <FatwaElement Fatwa ID={120} QUESTION={"ماهي أسس العقيدة الإسلامية"}/>
            </>
        }

{Book && <>
    <FatwaElement Book ID={10} title={"صحيح البخاري"}/>
            </>
        }
      </div>
    </AlertDialogHeader>
    <AlertDialogFooter className="text-right flex gap-3 justify-center w-full ">
      <AlertDialogCancel className="w-full  text-center ">إلغاء</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      <span className='text-sm text-red-600 font-bold'>{nbrElement}</span>
    </div>
  )
}

export default DataComponent
