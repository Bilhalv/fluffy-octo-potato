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
    tipo: string;
    //adicionar opções de tipos de condições
}