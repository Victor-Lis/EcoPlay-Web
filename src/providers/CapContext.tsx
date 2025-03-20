"use client";
import type { ReactNode } from "react";

import { onValue } from "firebase/database";
import { createContext, useEffect, useState } from "react";

import { tampinhasRef } from "@/utils/firebaseConfig";
import type { CapValType } from "@/@types/CapValType";
import type { CapsType } from "@/@types/CapsType";

interface CapContextData {
  total: number;
  // tampinhas: CapsType | undefined;
  loading: boolean;
}

export const CapContext = createContext({} as CapContextData);

export const CapProvider = ({ children }: { children: ReactNode }) => {
  const [total, setTotal] = useState<number>(0);
  const [tampinhas, setTampinhas] = useState<CapsType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onValue(tampinhasRef, async (snapshot) => {
      const tampinhasVal = await snapshot.val();

      if (!tampinhasVal.total) return;

      setTotal(tampinhasVal.total);

      Object.keys(tampinhasVal).map((curso) => {
        if (curso === "total") return;

        const cursoVal = tampinhasVal[curso];
        if (!cursoVal) return;
        Object.keys(cursoVal).map((ano) => {
          const anoVal = cursoVal[Number(ano)];
          if (!anoVal) return;

          Object.keys(anoVal).map((periodo) => {
            tampinhasVal[curso][ano][periodo] = Object.values(anoVal[periodo]);
          });
        });
      });

      setTampinhas(tampinhasVal)
    });

    return () => unsubscribe();
  }, []);

  return (
    <CapContext.Provider value={{ total, loading }}>
      {children}
    </CapContext.Provider>
  );
};
