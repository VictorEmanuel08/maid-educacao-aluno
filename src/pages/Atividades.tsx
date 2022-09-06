import '../styles/atividades.scss'

import SidebarLeft from '../components/sidebar/SidebarLeft'
import CabecalhoGeral from '../components/header/CabecalhoGeral'
import SidebarRight from '../components/sidebar/SidebarRight'

export function Atividades() {
  return (
    <div className="TUDO">
      <div className="cabecalho">
        <CabecalhoGeral />
      </div>
      <div className="corpo">
        <div className="sideLeft">
          <SidebarLeft />
        </div>
        <div className="Box"></div>
        <div className="sideRight">
          <SidebarRight />
        </div>
      </div>
    </div>
  )
}
