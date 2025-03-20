"use client";
import type { ReactNode } from "react";

import { createContext, useState } from "react";
import type { YearType } from "@/@types/YearType";
import type { MonthType } from "@/@types/MonthType";
import type { DayType } from '@/@types/DayType'

interface HistoryContextData {
  yearOfMonth: YearType | null
  selectedMonth: MonthType | null
  selectMonth: ({year, month}:{year: YearType, month: MonthType}) => void
  selectedDay: DayType | null
  selectDay: ({day}:{day: DayType}) => void
  handleClearMonth: () => void
}

export const HistoryContext = createContext({} as HistoryContextData);

export const HistoryProvider = ({ children }: { children: ReactNode }) => {
  const [yearOfMonth, setYearOfMonth] = useState<YearType | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<MonthType | null>(null)
  const [selectedDay, setSelectedDay] = useState<DayType | null>(null)

  function selectMonth({year, month}:{year: YearType, month: MonthType}){
    setSelectedDay(null)
    setSelectedMonth(month)
    setYearOfMonth(year)
  }

  function selectDay({day}:{day: DayType}){
    setSelectedDay(day)
  }

  function handleClearMonth(){
    setSelectedDay(null)
    setSelectedMonth(null)
    setYearOfMonth(null)
  }

  function handleClearDay(){
    setSelectedDay(null)
  }

  return (
    <HistoryContext.Provider value={{ yearOfMonth, selectedMonth, selectMonth, selectedDay, selectDay, handleClearMonth }}>
      {children}
    </HistoryContext.Provider>
  );
};
