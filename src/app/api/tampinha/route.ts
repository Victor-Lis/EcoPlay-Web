import { NextResponse } from "next/server";
import { database } from "@/utils/firebaseConfig";
import { push, ref, runTransaction } from "firebase/database";

const isSmallerThanTen = (n: number) => (n < 10 ? `0${n}` : n.toString());

const errors = {
  UNAUTHORIZED: {
    message: "Senha incorreta",
    status: 401,
  },
  BAD_REQUEST: {
    message: "Parâmetros insuficientes",
    status: 400,
  },
  SERVER_ERROR: {
    message: "Erro interno no servidor",
    status: 500,
  },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const senha = searchParams.get("senha");
  const curso = searchParams.get("curso");
  const ano = searchParams.get("ano");
  const periodo = searchParams.get("periodo");
  const caps = searchParams.get("caps") ? Number.parseInt(searchParams.get("caps") as string) : 1;

  try {
    if (!senha || !curso || !ano || !periodo) {
      return NextResponse.json(errors.BAD_REQUEST, { status: errors.BAD_REQUEST.status });
    }

    if (senha !== process.env.NEXT_PUBLIC_PASSWORD) {
      return NextResponse.json(errors.UNAUTHORIZED, { status: errors.UNAUTHORIZED.status });
    }

    const reference = `/tampinhas/${curso.toLowerCase()}/${ano.toLowerCase()}/${periodo.toLowerCase()}`;
    const tampinhasRef = ref(database, reference);
    const totalRef = ref(database, "tampinhas/total");
    
    const today = new Date();
    if (process.env.NODE_ENV === "production") today.setHours(today.getHours() - 3);

    for (let i = 0; i < caps; i++) {
      push(tampinhasRef, {
        data: `${isSmallerThanTen(today.getDate())}/${isSmallerThanTen(today.getMonth() + 1)}/${today.getFullYear()}`,
        hora: `${isSmallerThanTen(today.getHours())}:${isSmallerThanTen(today.getMinutes())}:${isSmallerThanTen(today.getSeconds())}`,
      });
    }

    await runTransaction(totalRef, (valorAtual) => {
      return (valorAtual || 0) + caps; // Adiciona a quantidade de caps
    });

    return NextResponse.json(
      { message: "Tampinha salva com sucesso, o meio ambiente agradece!", curso, ano, periodo, caps },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao salvar tampinha:", error);
    return NextResponse.json(errors.SERVER_ERROR, { status: errors.SERVER_ERROR.status });
  }
}