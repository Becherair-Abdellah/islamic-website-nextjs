"use client";
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
} from "@/components/ui/alert-dialog";
import FatwaElement from "./FatwaElement";
import Link from "next/link";

const DataComponent = ({ title, nbrElement, type, setIsOpen }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-50 mt-2 ">
      <Link
        href={`/u/profile/${type}`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        {" "}
        {title}{" "}
      </Link>

      <span className="text-sm text-red-600 font-bold">{nbrElement}</span>
    </div>
  );
};

export default DataComponent;
