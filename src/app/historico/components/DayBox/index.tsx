import type { CapType } from "@/@types/CapType";
import type { DayType } from "@/@types/DayType";
import CapsCount from "@/app/components/CapsCount";

export default function DayBox({day}:{day: DayType}) {
  function capsByPeriod({period, tampinhas}:{period: "Manhã" | "Tarde" | "Noite", tampinhas: CapType[]}){
    if(period === "Manhã"){
      return tampinhas.filter((tamp) => (Number(tamp.hora.slice(0, 2)) >= 6 && Number(tamp.hora.slice(0, 2)) < 12)).length
    }
    if(period === "Tarde"){
      return tampinhas.filter((tamp) => (Number(tamp.hora.slice(0, 2)) >= 12 && Number(tamp.hora.slice(0, 2)) < 18)).length
    }
    return tampinhas.filter((tamp) => (Number(tamp.hora.slice(0, 2)) >= 18 && Number(tamp.hora.slice(0, 2)) < 24) || (Number(tamp.hora.slice(0, 2)) >= 0 && Number(tamp.hora.slice(0, 2)) < 6)).length
  }
 return (
  <div className="mt-10 w-10/12 flex flex-col justify-between items-start">
    <div className="w-full flex justify-between items-center">
      <h1 className="py-2 px-4 text-3xl text-white bg-green-500">{day.dia}</h1>
      <CapsCount tampinhas={day.tampinhas.length}/>
    </div>
    <div className="w-full bg-white border-2 border-green-500 p-2">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-green-500 text-3xl font-bold">Manhã</h2>
        <CapsCount boxClass="bg-white p-0" textClass="text-green-500" tampinhas={capsByPeriod({tampinhas: day.tampinhas, period: "Manhã"})}/>
      </div>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-green-500 text-3xl font-bold">Tarde</h2>
        <CapsCount boxClass="bg-white p-0" textClass="text-green-500" tampinhas={capsByPeriod({tampinhas: day.tampinhas, period: "Tarde"})}/>
      </div>
      <div className="w-full flex justify-between items-center">
        <h2 className="text-green-500 text-3xl font-bold">Noite</h2>
        <CapsCount boxClass="bg-white p-0" textClass="text-green-500" tampinhas={capsByPeriod({tampinhas: day.tampinhas, period: "Noite"})}/>
      </div>
    </div>
  </div>
 );
}