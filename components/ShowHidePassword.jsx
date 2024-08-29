'use client'
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
const ShowHidePassword= ({state}) => {
  return (
    <div className="absolute left-2 cursor-pointer">
     {state ? <RxEyeOpen  className="text-[#015f6c] text-[25px]"
      />:
      <GoEyeClosed
        className="text-[#015f6c]  text-[25px]"
      />} 
    </div>
  )
}

export default ShowHidePassword
