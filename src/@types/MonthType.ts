import type { CapType } from "./CapType"
import type { DayType } from "./DayType"

export type MonthType = {
  mes: string,
  dias: DayType[];
  tampinhas: number
}