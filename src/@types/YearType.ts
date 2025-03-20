import { CapType } from "./CapType";
import type { MonthType } from "./MonthType";

export type YearType = {
  ano: string;
  meses: MonthType[];
  tampinhas: number
};