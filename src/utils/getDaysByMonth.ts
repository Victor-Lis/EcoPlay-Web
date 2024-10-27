export function getDaysByMonth({ano, mes}:{ano: string, mes: string}): number[]{

  const daysOfFebruary = (ano: string) => (Number(ano) % 400 === 0) || (Number(ano) % 4 === 0 && Number(ano) % 100 !== 0) ? 29 : 28

  type MonthsDays = Record<string, number>;
  const monthsDays: MonthsDays = {
    "Janeiro": 31,
    "Fevereiro": daysOfFebruary(ano),
    "Março": 31,
    "Abril": 30,
    "Maio": 31,
    "Junho": 30,
    "Julho": 31,
    "Agosto": 31,
    "Setembro": 30,
    "Outubro": 31,
    "Novembro": 30,
    "Dezembro": 31,
  }

  const daysArray = []
  for(let i = 1; i <= monthsDays[mes]; i++){
    daysArray.push(i)
  }

  return daysArray
}