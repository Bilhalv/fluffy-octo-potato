import Personagem from "../constructors/Personagem"

export const Personagens: Personagem[] = [
    {
        persona: 'Frodo Bolseiro',
        player: 'Jhonny',
        classe: 'Ladino',
        raca: 'Hobbit',
        nivel: 1,
        pv: 50,
        pm: 10,
        atributos: [
            {
                nome: 'Força',
                valor: 2
            },
            {
                nome: 'Destreza',
                valor: 4
            },
            {
                nome: 'Constituição',
                valor: 1
            },
            {
                nome: 'Inteligência',
                valor: 0
            },
            {
                nome: 'Sabedoria',
                valor: 2
            },
            {
                nome: 'Carisma',
                valor: -2
            }
        ],
        defesa: 14,
        movimento: 9,
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