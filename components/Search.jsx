'use client'
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
  import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"   
const Search = () => {
  return (
<>

  <div className="">
  <AlertDialog >
  <AlertDialogTrigger className="bg-white text-blue-900 px-5 py-2 rounded-md">بحث</AlertDialogTrigger>
  <AlertDialogContent>
  <Command>
  <CommandInput className="pr-2" placeholder="البحث عن الفتاوى ,الأسماء" />
  <CommandList>
    {/* <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup> */}
  </CommandList>
</Command>
<AlertDialogFooter className="gap-2">
      <AlertDialogCancel className="bg-blue-900 text-white hover:bg-blue-700 hover:text-white">إلغاء</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>

</AlertDialog>
  </div>

</>
  
  )
}

export default Search
