import { ThemeProvider } from "styled-components";
import { LoginSignUp } from "./pages/LoginSignUp";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistentDrawerLeft } from "./components/SideBarPages";
import { CadastroSignUp } from "./pages/CadastroSignUp";
import { RegistrarPonto } from "./pages/Ponto/RegistrarPonto";
import { PontoHome } from "./pages/Ponto/Ponto";
import { DefaultLayout } from "./components/MainLayout/DefaultLayout";

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
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<LoginSignUp onLogin={handleLogin} />} />
            <Route path="/SideBarPages" element={<PersistentDrawerLeft />} />
            <Route
              path="/Cadastro"
              element={<CadastroSignUp onRegister={handleCadastro} />}
            />
            <Route path="/registrarPonto" element={<RegistrarPonto />} />
            <Route path="/ponto" element={<PontoHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
