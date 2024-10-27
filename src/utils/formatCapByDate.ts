import type { YearType } from "@/@types/YearType";
import type { CapType } from "@/@types/CapType";

function getTime(hora: string){
  const horas = Number.parseInt(hora.slice(0, 2)); // Pega as horas (0 a 1)
  const minutos = Number.parseInt(hora.slice(3, 5)); // Pega os minutos (3 a 4)
  const segundos = Number.parseInt(hora.slice(6, 8)); // Pega os segundos (6 a 7)

  const time = horas * 3600 + minutos * 60 + segundos;

  return time;
}

function formatCapByDayHour({days}:{days: CapType[]}){
  const dates: string[] = []
  days.map((day) => {
    if (!dates.includes(day.dia)) dates.push(day.dia);
  });
  const formattedDate: any[] = []
  dates.map((date) => {
    const tampinhas = days.filter((day) => day.dia === date)
    tampinhas.sort((a,b) => getTime(b.hora)-getTime(a.hora))
    formattedDate.push({
      dia: date,
      tampinhas,
    })
  }) 

  return formattedDate
}

export function formatCapByDate({ caps }: { caps: CapType[] }): any[] {
  const anos: any[] = [];
  caps.map((cap) => {
    if (!anos.includes(cap.ano)) anos.unshift(cap.ano);
  });

  const result: YearType[] = [];
  formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === new Date().getMonth()+1) || []})
  anos.map((ano) => {
    result.push({
      ano,
      meses: [
        {
          mes: "Janeiro",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 1 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 1).length
        },
        {
          mes: "Fevereiro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 2 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 2 && cap.ano === ano).length
        },
        {
          mes: "Março", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 3 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 3 && cap.ano === ano).length
        },
        {
          mes: "Abril",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 4 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 4 && cap.ano === ano).length
        },
        {
          mes: "Maio", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 5 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 5 && cap.ano === ano).length
        },
        {
          mes: "Junho", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 6 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 6 && cap.ano === ano).length
        },
        {
          mes: "Julho",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 7 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 7 && cap.ano === ano).length
        },
        {
          mes: "Agosto", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 8 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 8 && cap.ano === ano).length
        },
        {
          mes: "Setembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 9 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 9 && cap.ano === ano).length
        },
        {
          mes: "Outubro",
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 10 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 10 && cap.ano === ano).length
        },
        {
          mes: "Novembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 11 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 11 && cap.ano === ano).length
        },
        {
          mes: "Dezembro", 
          dias: formatCapByDayHour({days: caps.filter((cap) => Number.parseInt(cap.mes) === 12 && cap.ano === ano).sort((a,b) => Number.parseInt(b.dia)-Number.parseInt(a.dia))}),
          tampinhas: caps.filter((cap) => Number.parseInt(cap.mes) === 12 && cap.ano === ano).length
        },
      ],
      tampinhas: caps.filter((cap) => cap.ano === ano).length
    });
  });

  result.sort((a,b) => Number.parseInt(b.ano)-Number.parseInt(a.ano))
  console.log(result)
  return result;
}
