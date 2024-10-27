"use client"
import type { YearType } from "@/@types/YearType";
import MonthsContainer from "./MonthsContainer";
import CapsCount from "@/app/components/CapsCount";

import { FiX } from "react-icons/fi";

import { useHistoryContext } from "@/@hooks/useHistoryContext";

export default function Calendar({year}:{year: YearType}) {
  const { handleClearMonth, yearOfMonth } = useHistoryContext();
 return (
   <div className="mt-10 w-10/12 flex flex-col justify-between items-end">
    <div className="w-full flex justify-between items-center flex-wrap gap-y-1">
      <h1 className="py-2 px-4 text-3xl text-white bg-green-500">{year.ano}</h1>
      {yearOfMonth && 
      (
        <div className="mx-auto bg-red-400 flex justify-center items-center px-4 py-2 hover:scale-105 duration-150 cursor-pointer" onClick={handleClearMonth} onKeyDown={handleClearMonth}>
          <FiX size={30} color="#fff" />
          <h2 className="text-2xl text-white ml-1">Cancelar</h2>
        </div>
      )}
      <CapsCount tampinhas={year.tampinhas}/>
    </div>
    <MonthsContainer meses={year.meses} year={year}/>
   </div>
 );
}