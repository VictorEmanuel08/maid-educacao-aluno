import '../styles/materias.scss'

import SidebarLeft from '../components/sidebar/SidebarLeft'
import CabecalhoGeral from '../components/header/CabecalhoGeral'
import SidebarRight from '../components/sidebar/SidebarRight'
import { MateriasBox } from '../components/box/box-Materias/MateriasBox'

export function Materias() {
  return (
    <div className="TUDO">
      <div className="cabecalho">
        <CabecalhoGeral />
      </div>
      <div className="corpo">
        <div className="sideLeft">
          <SidebarLeft />
        </div>
        <div className="homebox">
          <MateriasBox />
        </div>
        <div className="sideRight">
          <SidebarRight />
        </div>
      </div>
    </div>
  )
}
