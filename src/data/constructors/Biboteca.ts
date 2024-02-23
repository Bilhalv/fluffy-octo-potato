import { NPC } from "./NPC"

export type Combate = {
    titulo: string,
    content: NPC[],
}

export type Cena = {
    titulo: string,
    content: React.JSX.Element,
    combate?: Combate,
}

export type Partes = {
    titulo: string,
    intro: string,
    cenas: Cena[],
}

export type Aventura = {
    titulo: string,
    partes: Partes[],
}