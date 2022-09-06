import aulasImg from '../../assets/images/home/asideLeft/AULAS/AULAS.png'
import materiasImg from '../../assets/images/home/asideLeft/MATERIAS/MATERIAS.png'
import atividadesImg from '../../assets/images/home/asideLeft/ATIVIDADES/ATIVIDADES.png'
import progressoImg from '../../assets/images/home/asideLeft/PROGRESSO/PROGRESSO.png'
import calendarioImg from '../../assets/images/home/asideLeft/CALENDARIO/CALENDARIO.png'

import './SidebarLeft.scss'

export default function SidebarLeft() {
  return (
    <div className="sidebarLeft">
      <div className="container-a">
        <ul>
          <li className="l1">
            <a href="/home">
              <img src={aulasImg} className="aulas" />
            </a>
          </li>
          <li className="l2">
            <a href="/materias">
              <img src={materiasImg} className="materias" />
            </a>
          </li>
          <li className="l3">
            <a href="/atividades">
              <img src={atividadesImg} className="atividades" />
            </a>
          </li>
          <li className="l4">
            <a href="/progresso">
              <img src={progressoImg} className="progresso" />
            </a>
          </li>
          <li className="l5">
            <a href="/calendario">
              <img src={calendarioImg} className="calendario" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
