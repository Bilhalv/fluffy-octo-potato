import React from "react";

type Regra = {
    titulo: string;
    descricao: React.JSX.Element | string;
}

export type AçaoRegra = Regra & {
    acao: "Padrão" | "Movimento" | "Completa" | "Livre"; 
}

export type ManobraRegra = Regra

export type CondicaoRegra = Regra & {
    tipo?: 
    "Arcano" | "Atordoamento" | "Cansaço" | "Climático" | "Cura" | "Dano" | "Divino" | "Luz" | "Mágico" | "Medo" | "Mental" | "Metabolismo" | "Metamorfose" | "Movimento" | "Perda de Vida" | "Sentidos" | "Trevas" | "Veneno";
}