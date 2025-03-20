type Registro = {
  data: string;
  hora: string;
};

type Periodo = Registro[];

type Dia = {
  manha?: Periodo;
  tarde?: Periodo;
  noite?: Periodo;
};

type Setor = (null | Dia)[];

export type CapsType = {
  [key: string]: Setor;
};