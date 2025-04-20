import { ThemeProvider } from 'styled-components';
import { LoginSignUp } from './pages/LoginSignUp'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';


export function App() {
  const handleLogin =(msg: string) => {
    console.log(msg);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <LoginSignUp onLogin={handleLogin}/>
    </ThemeProvider>
  )
}

