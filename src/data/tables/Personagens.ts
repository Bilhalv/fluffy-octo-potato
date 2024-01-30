import Personagem from "../constructors/Personagem"

export const Personagens: Personagem[] = [
    {
        persona: 'Frodo Bolseiro',
        player: 'Jhonny',
        classe: 'Ladino',
        raca: 'Hobbit',
        nivel: 1,
        pv: 8,
        pm: 0,
        atributos: [
            {
                nome: 'Força',
                valor: 8
            },
            {
                nome: 'Destreza',
                valor: 16
            },
            {
                nome: 'Constituição',
                valor: 12
            },
            {
                nome: 'Inteligência',
                valor: 10
            },
            {
                nome: 'Sabedoria',
                valor: 14
            },
            {
                nome: 'Carisma',
                valor: 10
            }
        ],
        defesa: 14,
        movimento: 6,
        armas: [
            {
                nome: 'Adaga',
                desc: '1d4',
                dano: '1d4',
                acerto: 2,
                crit: '19-20/x2'
            }
        ],
        poderes: [
            {
                nome: 'Ataque Furtivo',
                desc: 'Quando um ladino ataca um alvo que não tenha agido na rodada, ele pode causar 1d6 de dano extra',
                acao: 'Padrão'
            },
            {
                nome: 'Esquiva Sobrenatural',
                desc: 'Quando um ladino é alvo de um ataque, ele pode gastar 1 PM para receber +4 de bônus na Defesa contra esse ataque',
                acao: 'Reação',
                pm: 1
            }
        ],
        img: 'https://i'
    },
]