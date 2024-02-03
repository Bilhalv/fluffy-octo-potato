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

//tipos para magias

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
  acao: acoes;
  aprimoramentos?: aprimoramento[];
  alcance: string;
  duracao: string;
  alvo_area: string;
  resistencia?: resistencias;
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
