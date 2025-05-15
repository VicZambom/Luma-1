// No seu pages/Ponto/PontoPage.tsx

import { Box } from "@mui/material";
import {
  AccessTimeOutlined,
  EditNoteOutlined,
  PunchClock,
} from "@mui/icons-material";

import { Main } from "../../components/SideBarPages";
import { UserCardInfo } from "../../components/UserInfo";
import { Greeting } from "../../components/saudacao";
import { PontoHome } from "./Ponto";

export const PontoPage = () => {
  const userName = "Carlos";

  // Dados do usuário para o UserCardInfo
  const userInfoData = {
    name: "Carlos Moraes",
    descricao: "QA (Quality Assurance)",
    avatar: "/images/carlos_photo.jpg",
    entradas: 4,
    saida: 3,
    faltas: 0,
  };

  // Componentes PontoHome
  const pontoHomeItems = [
    {
      icon: <AccessTimeOutlined sx={{ fontSize: "3rem" }} />,
      title: "Registrar Ponto",
      onClick: () =>
        console.log("Registrar Ponto Clicado - Atualizando página"),
    },
    {
      icon: <EditNoteOutlined sx={{ fontSize: "3rem" }} />,
      title: "Solicitar Abono",
      onClick: () => console.log("Abono Gerado"),
    },
    {
      icon: <PunchClock sx={{ fontSize: "3rem" }} />,
      title: "Espelho de Ponto",
      onClick: () => console.log("Espelho de Ponto Gerado"),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <Main
        sx={{
          width: "100%",
        }}
      >
        <Greeting name={userName} />

        <UserCardInfo {...userInfoData} cardWidth="100%" />

        <Box>
          {pontoHomeItems.map((item, index) => (
            <PontoHome key={index} {...item} />
          ))}
        </Box>
      </Main>
    </Box>
  );
};
