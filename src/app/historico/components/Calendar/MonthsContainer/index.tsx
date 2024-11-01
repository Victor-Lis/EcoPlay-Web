"use client";
import { useHistoryContext } from "@/@hooks/useHistoryContext";
import type { MonthType } from "@/@types/MonthType";
import type { YearType } from "@/@types/YearType";
import { goTo } from "@/utils/navigation";

export default function MonthsContainer({
  meses,
  year,
}: {
  meses: MonthType[];
  year: YearType;
}) {
  const { selectMonth } = useHistoryContext();

  function handleSelectMonth({year, month}:{year: YearType, month: MonthType}){
    selectMonth({year, month})
    goTo("history")
  }

  return (
    <div className="w-full bg-white border-2 border-green-500 p-2 grid justify-items-center justify-center content-center min-[450px]:grid-cols-2 min-[650px]:grid-cols-3 min-[850px]:grid-cols-4 min-[1050px]:grid-cols-5 min-[1300px]:grid-cols-6 gap-x-2 gap-y-1">
      {meses.map((mes) => {
        return (
          <button
            type="button"
            disabled={!mes.tampinhas}
            onClick={() => handleSelectMonth({ month: mes, year })}
            onKeyDown={() => handleSelectMonth({ month: mes, year })}
            className={`py-2 px-4 text-white w-44 border-2 duration-150 ${mes.tampinhas ? "bg-green-500 hover:border-green-600 hover:opacity-85 hover:scale-[102.5%] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`}
            key={`${year.ano}-${mes.mes}`}
          >
            {mes.mes}
          </button>
        );
      })}
    </div>
  );
}
