import { magia } from "../functions/findMagia";

type atributo = {
    nome: string;
    valor: number;
}

type info = {
    nome: string;
    desc: string;
}

export type arma = info & {
    dano: string;
    acerto: number;
    crit: string;
    arcance: string;
}


export type poder = info & {
    acao: string;
    pm?: number;
}

type Personagem = {
    persona: string;
    player: string;
    classe: string;
    raca: string;
    nivel: number;
    pv: number;
    pm: number;
    atributos: atributo[];
    defesa: number;
    movimento: number;
    armas?: arma[];
    poderes?: poder[];
    magias?: magia[];
    img: string;
}

export default Personagem;