import logoImg from '../../assets/images/login/logo.png'
import alarmeImg from '../../assets/images/home/cabeçalho/ALARME/ALARME.png'
import calendarioImg from '../../assets/images/home/cabeçalho/CALENDARIO/CALENDARIO.png'
import notasImg from '../../assets/images/home/cabeçalho/NOTAS/NOTAS.png'
import perfilImg from '../../assets/images/home/cabeçalho/PERFIL/PERFIL.png'
import sairImg from '../../assets/images/home/cabeçalho/SAIR/SAIR.png'

import './CabecalhoGeral.scss'

export default function CabecalhoGeral() {
  return (
    <div>
      <div className="cabeçalho">
        <div className="esquerda" />
        <div className="logoEducacao">
          <img src={logoImg} alt="Logo +Educação" />
        </div>
        <div className="direita">
          <div className="avatar">
            <img src={perfilImg} alt="Avatar" />
          </div>
          <div className="notify">
            <img src={alarmeImg} alt="Alarme" />
          </div>
          <div className="notion">
            <img src={notasImg} alt="notion" />
          </div>
          <div className="calendar">
            <img src={calendarioImg} alt="calendar" />
          </div>
          <div className="exit">
            <img src={sairImg} alt="exit" />
          </div>
        </div>
      </div>
      <div className="line" />
    </div>
  )
}
