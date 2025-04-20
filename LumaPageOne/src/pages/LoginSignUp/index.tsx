import { LeftImageSection } from '../../components/LeftSection';
import {  Container } from './styles';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Button from '@mui/material/Button';
import CenterFocusWeakOutlinedIcon from '@mui/icons-material/CenterFocusWeakOutlined';
import { Divider } from '@mui/material';
import Logo from '../../assets/LogoFudida.png'

type LoginSignUpProps = {
  onLogin: (msg: string) => void;
};

export function LoginSignUp({ onLogin }: LoginSignUpProps) {
    return (
        <Container>         
          <LeftImageSection />
      
          <div className="rightContent">
            <div className="formHeader">
              <h1>Faça login</h1>
              
            </div>
      
            <form className="loginForm">
            
              <div className="inputGroup">
                <p>Por favor, informe suas credenciais de login.</p>
                <label htmlFor="usuario">Usuário:</label>
                <input type="text" id="usuario" placeholder="Insira seu CPF ou Usuário" required />
              </div>
      
              <div className="inputGroup">
                <label htmlFor="senha">Senha:</label>
                <div className="inputWithIcon">
                  <input type="password" id="senha" placeholder="Insira sua Senha" required />
                  <VisibilityOutlinedIcon className="icon" />
                </div>
              </div>
      
              <div className="rememberForgot">
                <a href="#">Esqueceu sua senha?</a>
              </div>
      
            </form>

            <Button
                    fullWidth
                    variant="contained"
                    onClick={() => onLogin('Usuário Logado!')}
                    className="loginButton"
                >
                    Vamos lá!
            </Button>

            <div className="registerLink">
                <Divider>
                    <span>ou</span>
                </Divider>
                <CenterFocusWeakOutlinedIcon className='photoIcon'/>
                <p className='registerTextArea'>Não possui uma conta? <a href="#">Cadastre-se</a></p>
              </div>

              <footer className='loginFooter'>
                <a href="#">Política de Privacidade |</a>
                <a href="#"> Termos de Serviço</a>
              </footer>

          </div>
          <div className='logoWrapper'>
            <img src={Logo} alt='logo da Luma'/>
           </div>

        </Container>
      );
      
}
