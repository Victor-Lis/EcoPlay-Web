"use client";
import type { DayType } from "@/@types/DayType";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import { useEffect, useState } from "react";
import { getDaysByMonth } from "@/utils/getDaysByMonth"

export default function MonthsContainer({
  dias,
}: {
  dias: DayType[];
}) {
  const { selectDay, yearOfMonth, selectedMonth } = useHistoryContext();
  const [allDays, setAllDays] = useState<number[]>([])

  function handleSelectDay({day}:{day: DayType | undefined}){
    if(day) selectDay({day})
  }

  useEffect(() => {
    function handleGetDays(){
      const dias = getDaysByMonth({ano: yearOfMonth?.ano as string, mes: selectedMonth?.mes as string})
      setAllDays(dias)
    }
    handleGetDays()
  }, [yearOfMonth?.ano, selectedMonth?.mes])

  return (
    <div className="w-full bg-white border-2 border-green-500 p-2 grid justify-items-center justify-center content-center grid-cols-4 min-[450px]:grid-cols-6 min-[650px]:grid-cols-9 min-[820px]:grid-cols-12 lg:grid-cols-16 xl:grid-cols-18 gap-x-2 gap-y-1">
      {allDays.map((dia) => {
        return (
          <button
            type='button'
            onClick={() => handleSelectDay({ day: selectedMonth?.dias.find((d) => d.dia === `${dia}`) })}
            onKeyDown={() => handleSelectDay({ day: selectedMonth?.dias.find((d) => d.dia === `${dia}`) })}
            disabled={!selectedMonth?.dias.find((d) => d.dia === `${dia}`)}
            className={`py-2 px-4 text-white w-14 text-center border-2 duration-150  ${!selectedMonth?.dias.find((d) => d.dia === `${dia}`) ? "bg-gray-400 cursor-not-allowed": "bg-green-500 hover:border-green-600 hover:opacity-85 hover:scale-[102.5%] cursor-pointer"}`}
            key={`${dia}`}
          >
            {dia}
          </button>
        );
      })}
    </div>
  );
}
