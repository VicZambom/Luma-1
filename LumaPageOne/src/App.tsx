import { ThemeProvider } from "styled-components";
import { LoginSignUp } from "./pages/LoginSignUp";

import { GlobalStyle } from "./styles/global";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { CadastroSignUp } from "./pages/CadastroSignUp";
import { RegistrarPonto } from "./pages/Ponto/RegistrarPonto";

import { DefaultLayout } from "./components/MainLayout/DefaultLayout";
import { Home } from "./pages/Home";
import { PontoPage } from "./pages/Ponto/PontoPage";
import { useEffect } from "react";

import { defaultTheme } from "./styles/themes/default";

function RouterLogger() {
  const location = useLocation();
  useEffect(() => {
    console.log("Nova localização:", location.pathname);
  }, [location]);

  return null;
}

export function App() {
  const handleLogin = (msg: string) => {
    console.log(msg);
  };
  const handleCadastro = (msg: string) => {
    console.log(msg);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <RouterLogger />
        <Routes>
          <Route path="/" element={<LoginSignUp onLogin={handleLogin} />} />
          <Route
            path="/Cadastro"
            element={<CadastroSignUp onRegister={handleCadastro} />}
          />

          {/* rotas que precisam do DefaultLayout*/}
          <Route path="/app" element={<DefaultLayout />}>
            <Route index element={<Navigate to="/app/inicio" replace />} />
            <Route path="inicio" element={<Home />} />
            <Route
              path="registrarPonto"
              element={<RegistrarPonto userId={"string"} />}
            />
            <Route path="ponto" element={<PontoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
