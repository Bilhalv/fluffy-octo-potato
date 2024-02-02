import { NPC} from "../constructors/NPC";

export const NPCs: NPC[] = [
  {
    nome: "Gorlogg",
    ataques: [
      {
        nome: "Mordida",
        dano: [{
          dados: 1,
          lados: 8,
          bonus: 3,
        }],
        acerto: 5,
        crit: "20/x2",
      },
    ],
    atributos: [
      {
        nome: "Força",
        valor: 16,
      },
      {
        nome: "Destreza",
        valor: 14,
      },
      {
        nome: "Constituição",
        valor: 15,
      },
      {
        nome: "Inteligência",
        valor: 2,
      },
      {
        nome: "Sabedoria",
        valor: 12,
      },
      {
        nome: "Carisma",
        valor: 6,
      },
    ],
    defesa: 15,
    deslocamento: 6,
    img: "https://i",
    pv: 50,
    poderes: [
      {
        nome: "Fúria",
        desc: "Gorlogg entra em fúria",
        acao: "Livre",
      },
    ],
    categoria: "Monstro",
    fortitude: 6,
    iniciativa: 2,
    nd: 3,
    percepcao: 10,
    resistencias: "Forte",
    reflexos: 3,
    tamanho: "Grande",
    tipo: "Humanoide",
    vontade: 3,
    pericias: [
      {
        nome: "Furtividade",
        bonus: 5,
      },
    ],
    tesouro: "Nenhum",
  },
];
