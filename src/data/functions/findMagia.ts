import { Magias } from "../tables/Magias";

type info = {
  nome: string;
  desc: string;
};

type aprimoramento = {
  desc: string;
  custo: number;
};

type classificacoes = "Arcana" | "Divina" | "Universal";

type escolas =
  | "Abjuração"
  | "Adivinhação"
  | "Convocação"
  | "Encantamento"
  | "Evocação"
  | "Ilusão"
  | "Necromancia"
  | "Transmutação";

type resistencias = "Vontade" | "Fortitude" | "Reflexos";

export type magia = info & {
  circulo: number;
  classificacao: classificacoes;
  escola: escolas;
  acao: string;
  aprimoramentos?: aprimoramento[];
  alcance: string;
  duracao: string;
  alvo_area: string;
  resistencia?: resistencias;
};

export function findMagia(nome: string): magia {
  return Magias.find((magia) => magia.nome === nome) as magia;
}
