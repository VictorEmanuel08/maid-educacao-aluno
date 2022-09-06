import '../styles/progresso.scss'

import SidebarLeft from '../components/sidebar/SidebarLeft'
import CabecalhoGeral from '../components/header/CabecalhoGeral'
import SidebarRight from '../components/sidebar/SidebarRight'
import { ProgressoBox } from '../components/box/box-Progresso/ProgressoBox'

export function Progresso() {
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
          <ProgressoBox />
        </div>
        <div className="sideRight">
          <SidebarRight />
        </div>
      </div>
    </div>
  )
}
