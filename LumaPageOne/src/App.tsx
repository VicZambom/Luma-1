import { ThemeProvider } from "styled-components";
import { LoginSignUp } from "./pages/LoginSignUp";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PersistentDrawerLeft } from "./components/SideBarPages";
import { CadastroSignUp } from "./pages/CadastroSignUp";

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
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignUp onLogin={handleLogin} />} />
          <Route path="/SideBarPages" element={<PersistentDrawerLeft />} />
          <Route
            path="/Cadastro"
            element={<CadastroSignUp onRegister={handleCadastro} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
