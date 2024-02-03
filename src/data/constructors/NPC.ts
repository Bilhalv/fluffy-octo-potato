import { magia } from "../functions/findMagia";

type atributo = {
  nome: string;
  valor: number;
};

type info = {
  nome: string;
  desc: string;
};

type rolagem = {
  dados: number;
  lados: number;
  bonus: number;
  tipo?: string;
};

export type ataque = {
  nome: string;
  dano: rolagem[];
  acerto: number;
  crit: string;
};

type acoes = "Livre" | "Padrão" | "Movimento" | "Reação" | "Completa";

export type poder = info & {
  acao: acoes;
  pm?: number;
};

type pericia = {
  nome: string;
  bonus: number;
};

export type NPC = {
  nome: string;
  img: string;
  nd: number;
  categoria: string;
  tamanho: string;
  tipo?: string;
  pv: number;
  pm?: number;
  iniciativa: number;
  percepcao: number;
  defesa: number;
  fortitude: number;
  reflexos: number;
  vontade: number;
  resistencias: string;
  deslocamento: number;
  ataques: ataque[];
  poderes?: poder[];
  magias?: magia[];
  atributos: atributo[];
  pericias: pericia[];
  tesouro: string;
};
