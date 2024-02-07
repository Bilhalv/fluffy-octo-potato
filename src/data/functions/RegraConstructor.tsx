import { AçaoRegra, CondicaoRegra, ManobraRegra } from "../constructors/Regra";
import React from "react";

export function RegraConstructor(
  regra: AçaoRegra | CondicaoRegra | ManobraRegra
) {
  return (
    <div>
      {regra.titulo}
      {regra.descricao}
    </div>
  );
}
