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
}

type acoes = 'Livre' | 'Padrão' | 'Movimento' | 'Reação' | 'Completa'

export type poder = info & {
    acao: acoes;
    pm?: number;
}

//tipos para magias

type aprimoramento = info & {
    custo: number;
}

type classificacoes = 'Arcana' | 'Divina' | 'Universal'

type escolas = 'Abjuração' | 'Adivinhação' | 'Convocação' | 'Encantamento' | 'Evocação' | 'Ilusão' | 'Necromancia' | 'Transmutação'

type resistencias = 'Vontade' | 'Fortitude' | 'Reflexos'

export type magia = info & {
    circulo: number;
    classificacao: classificacoes;
    escola: escolas;
    acao: acoes;
    aprimoramentos?: aprimoramento[];
    alcance: string;
    duracao: string;
    alvo_area: string;
    resistencia: resistencias;
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