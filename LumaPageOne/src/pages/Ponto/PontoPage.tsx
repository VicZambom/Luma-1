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
import { Link } from "react-router-dom";

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
    },
    {
      icon: <EditNoteOutlined sx={{ fontSize: "3rem" }} />,
      title: "Solicitar Abono",
    },
    {
      icon: <PunchClock sx={{ fontSize: "3rem" }} />,
      title: "Espelho de Ponto",
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

        <Box sx={{ display: "inline-block" }}>
          {pontoHomeItems.map((item, index) => (
            <Link
              key={index}
              to={
                item.title === "Registrar Ponto"
                  ? "/app/registrarPonto"
                  : item.title === "Solicitar Abono"
                    ? "/app/solicitar-abono"
                    : "/app/espelho-de-ponto"
              }
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
                width: "100%",
              }}
            >
              <PontoHome {...item} />
            </Link>
          ))}
        </Box>
      </Main>
    </Box>
  );
};
