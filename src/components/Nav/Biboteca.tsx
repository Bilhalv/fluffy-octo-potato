import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Tab,
  Tabs,
} from "@mui/material";
import { Library } from "lucide-react";
import React from "react";
import { Biblioteca } from "../../data/tables/Biboteca";
import { TabContext, TabList, TabPanel } from "@mui/lab";

interface SelectBuilderProps {
  label: string;
  options: string[];
  value: string;
  onChange: (string) => void;
}

function SelectBuilder(props: SelectBuilderProps) {
  return (
    <FormControl fullWidth error>
      <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        label={props.label}
        value={props.value}
        onChange={(x) => props.onChange(x.target.value)}
      >
        {props.options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export function Biboteca() {
  const [modalOpen, setModalOpen] = React.useState<boolean>(true);
  const [aventura, setAventura] = React.useState<string>(Biblioteca[0].titulo);
  const [parte, setParte] = React.useState<string>(
    Biblioteca[0].partes[0].titulo
  );
  return (
    <>
      <button
        onClick={() => {
          setModalOpen(!modalOpen);
        }}
        className="p-2 bg-red-600 rounded-full hover:scale-110 hover:bg-red-400 transition-all"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={"Biboteca"}
        data-tooltip-variant="error"
      >
        <Library />
      </button>
      <Drawer
        open={modalOpen}
        anchor="bottom"
        onClose={() => {
          setModalOpen(!modalOpen);
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiDrawer-paper": {
            bgcolor: "rgba(255, 255, 255, 0.4)",
            color: "white",
            backdropFilter: "blur(5px)",
            paddingX: "20px",
            paddingY: "10px",
          },
        }}
      >
        <div className="font-tormenta">
          <h1 className="text-3xl text-center mb-2 drop-shadow-[2px_2px_rgba(0,0,0)]">
            Biblioteca
          </h1>
          <SelectBuilder
            label="Aventura"
            options={Biblioteca.map((x) => x.titulo)}
            value={aventura}
            onChange={setAventura}
          />
          {Biblioteca.find((x) => x.titulo === aventura) && (
            <>
              <TabContext value={parte}>
                <TabList
                  onChange={(_, newValue) => setParte(newValue)}
                  variant="fullWidth"
                  sx={{
                    "& .MuiTabs-indicator": {
                      bgcolor: "rgba(255, 0, 0, 0.8)",
                    },
                  }}
                >
                  {Biblioteca.find((x) => x.titulo === aventura)?.partes.map(
                    (x) => (
                      <Tab
                        sx={{
                          color: "rgba(255, 100, 100, 0.4)",
                          fontWeight: "bold",
                          "&.Mui-selected": {
                            color: "rgba(255, 0, 0, 0.8)",
                          },
                        }}
                        label={x.titulo}
                        value={x.titulo}
                      />
                    )
                  )}
                </TabList>
                {Biblioteca.find((x) => x.titulo === aventura)?.partes.map(
                  (x) => (
                    <TabPanel value={x.titulo}>
                      <div className="max-h-[60vh] overflow-scroll">
                        {x.cenas.map((cena, idx) => (
                          <Accordion
                            sx={{
                              bgcolor: "rgba(255, 255, 255, 0.4)",
                              color: "white",
                              backdropFilter: "blur(5px)",
                            }}
                            key={idx}
                          >
                            <AccordionSummary>
                              <h2 className="font-tormenta text-2xl text-red-600">
                                {cena.titulo}
                              </h2>
                            </AccordionSummary>
                            <AccordionDetails
                              sx={{
                                paddingX: "20px",
                              }}
                            >
                              <div className="font-poppins text-justify text-sm text-black">
                                {cena.content as React.JSX.Element}
                              </div>
                            </AccordionDetails>
                          </Accordion>
                        ))}
                      </div>
                    </TabPanel>
                  )
                )}
              </TabContext>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
}
