"use client"
import type { MonthType } from "@/@types/MonthType";
import DaysContainer from '../DaysContainer'
import CapsCount from "@/app/components/CapsCount";

export default function DaysCalendar({mes}:{mes: MonthType}) {
 return (
   <div className="mt-10 w-10/12 flex flex-col justify-center items-end">
    <div className="w-full flex justify-between items-center">
      <h1 className="py-2 px-4 text-3xl text-white bg-green-500">{mes.mes}</h1>
      <CapsCount tampinhas={mes.tampinhas}/>
    </div>
    <DaysContainer dias={mes.dias}/>
   </div>
 );
}