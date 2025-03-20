type Registro = {
  data: string;
  hora: string;
};

type Periodo = {
  [key: string]: Registro;
};

type Dia = {
  manha?: Periodo;
  tarde?: Periodo;
  noite?: Periodo;
};

type Setor = (null | Dia)[];

export type CapValType = {
  total: number;
} & {
  [key: string]: Setor;
};