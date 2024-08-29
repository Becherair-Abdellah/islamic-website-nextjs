
const EachClass = ({title,href}) => {
  return (
    <a
    href={href}
    className="p-2 border-2 text-xs md:text-sm border-blue-950 hover:bg-[#015f6c] hover:text-white cursor-pointer  font-semibold text-center "
  >
   {title}
  </a>
  )
}

export default EachClass
