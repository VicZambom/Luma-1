import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { LoginSignUp } from './pages/LoginSignUp'
import { CadastroSignUp } from './pages/CadastroSignUp'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  const handleLogin = (msg: string) => console.log(msg)
  const handleRegister = (msg: string) => console.log(msg)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignUp onLogin={handleLogin} />} />
          <Route path="/cadastro" element={<CadastroSignUp onRegister={handleRegister} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
