import React from "react";
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
  pdf,
} from "@react-pdf/renderer";
import { NavModal } from "./NavModal";
import { Print } from "@mui/icons-material";
import { NPC } from "../../data/constructors/NPC";
import { NPCs } from "../../data/tables/NPCs";

interface TokenBuilderProps {
  token: string;
  size: string;
  name: string;
}

const TokenBuilder = ({ token, size, name }: TokenBuilderProps) => {
  const tamanho = size === "Pequeno" ? 1.5 : size === "Médio" ? 2.5 : 5;
  return (
    <>
      {Array.from({ length: 2 }).map((_, i) => (
        <Image
          style={{
            width: `${tamanho}cm`,
            height: `${tamanho}cm`,
            border: "1px dotted black",
            padding: 1,
            borderRadius: "100%",
          }}
          src={token}
        />
      ))}
    </>
  );
};

export function PDF() {
  function DocumentToken() {
    return (
      <Document>
        <Page size="A4">
          <View
            style={{
              flexDirection: "row",
              padding: 30,
              gap: 10,
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {npcsLocal.map((npc: NPC) => (
              <TokenBuilder
                token={npc.img}
                size={npc.tamanho}
                name={npc.nome}
              />
            ))}
          </View>
        </Page>
      </Document>
    );
  }
  const [npcsLocal, setNpcsLocal] = React.useState<NPC[]>(
    JSON.parse(localStorage.getItem("npcs") || "[]")
  );
  React.useEffect(() => {
    setNpcsLocal(JSON.parse(localStorage.getItem("npcs") || "[]"));
  }, [localStorage.getItem("npcs")]);
  const Download = async () => {
    const blob = await pdf(<DocumentToken />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "tokens.pdf";
    link.click();
  };
  return (
    <>
      <NavModal icon={<Print />} tooltip="Imprimir">
        <PDFViewer className="w-full h-96 rounded-t-lg">
          <DocumentToken />
        </PDFViewer>
        <button
          onClick={Download}
          className="w-full bg-gray-600 text-white p-2 hover:bg-gray-700 transition-all rounded-b-lg border-t-2 border-gray-700"
        >
          Baixar
        </button>
      </NavModal>
    </>
  );
}
