import { useNavigate } from 'react-router-dom'
import logoImg from '../assets/images/login/logo.png'
import { Button } from '../components/Button';
import { Link } from "react-router-dom";
import '../styles/login.scss'

export function Login(){
  const navigate = useNavigate();

  async function loginEducacao() {
    navigate('/home');
  }

  return(
    <div className="container">
      <main>
        <img src={logoImg} alt="Logo +Educação"/>        
        <form className='form-login'> {/*onSubmit={'Logar aq'}*/}
          <input type="text" placeholder='MATRÍCULA'/>
          {/* onChange={event=>setLoginCPFCode(event.target.value)}
          value={cpfCode} */}
          
          <input type="password" placeholder='***************'/>
          {/* onChange={event=>setLoginCPFCode(event.target.value)} */}
          {/* value={cpfCode} */}
        </form>     

        <a>
        <Link to ="/">
          ESQUECEU SUA SENHA?
        </Link>
        </a>

        <Button type="submit" onClick={loginEducacao}>
          ENTRAR
        </Button>

      </main>
    </div>
  );
}