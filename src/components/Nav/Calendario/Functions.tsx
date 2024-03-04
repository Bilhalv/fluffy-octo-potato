import seedrandom from "seedrandom";

export interface Dia {
  dia: number;
  nimb: boolean;
  diaDaSemana: number;
  diaIDX: number;
}

export interface Mes {
  nome: string;
  dias: Dia[];
}

export interface Ano {
  ano: number;
  meses: Mes[];
}

export function getMoonPhase(year: number, day: Dia) {
  let maxDiasAno = GerarMeses(year).reduce(
    (acc, mes) => acc + mes.dias.length,
    0
  );
  let moon = Math.floor((maxDiasAno / 3.5) * (day.diaIDX / maxDiasAno)) % 8;
  type Moon = {
    emoji: string;
    label: string;
  };
  let moonPhases: Moon[] = [
    {
      emoji: "🌑",
      label: "Nova",
    },
    {
      emoji: "🌒",
      label: "Crescente",
    },
    {
      emoji: "🌓",
      label: "Quarto Crescente",
    },
    {
      emoji: "🌔",
      label: "Crescente Gibosa",
    },
    {
      emoji: "🌕",
      label: "Cheia",
    },
    {
      emoji: "🌖",
      label: "Minguante Gibosa",
    },
    {
      emoji: "🌗",
      label: "Quarto Minguante",
    },
    {
      emoji: "🌘",
      label: "Minguante",
    },
  ];
  let finalMoon = {
    moon: moon,
    emoji: moonPhases[moon].emoji,
    label: moonPhases[moon].label,
  };
  return finalMoon;
}

export function GerarDiasdaSemana(mes: Mes[]) {
  let diaDaSemana = 0;

  for (let i = 0; i < mes.length; i++) {
    for (let j = 0; j < mes[i].dias.length; j++) {
      mes[i].dias[j].diaDaSemana = diaDaSemana;
      if (diaDaSemana === 6) {
        diaDaSemana = 0;
      } else {
        diaDaSemana++;
      }
    }
  }
  return mes;
}

export function GerarMeses(ano: number) {
  const rng = seedrandom(ano.toString());
  let Nimb = Math.floor(rng() * 12) + 1;
  const monthsNimb: number[] = [];

  for (let idx = 0; idx < Nimb; idx++) {
    const x = Math.floor(seedrandom(String(idx + ano))() * 12);
    monthsNimb.push(x);
  }

  let dayIDX = 0;

  const meses: Mes[] = [
    "Caravana",
    "Pomo",
    "Keenvia",
    "Sirravia",
    "Vigília",
    "Prussvia",
    "Ceifa",
    "Contenda",
    "Clausura",
    "Pharstyth",
    "Véu",
    "Pyra",
  ].map((mes, i) => {
    let haveNimb: boolean = monthsNimb.includes(i);

    let dayNimb = Math.floor(seedrandom((i + ano).toString())() * 32 + 1);

    const dias: Dia[] = [];

    for (let j = 1; j <= 30 + (haveNimb ? 1 : 0); j++) {
      dias.push({
        dia: j,
        nimb: haveNimb && j === dayNimb,
        diaDaSemana: 0,
        diaIDX: dayIDX,
      });
      dayIDX++;
    }

    return {
      nome: mes,
      dias,
    };
  });
  return GerarDiasdaSemana(meses);
}

export function gerarAno(ano: number) {
  return { ano, meses: GerarMeses(ano) };
}
