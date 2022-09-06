import '../styles/home.scss'

import SidebarLeft from '../components/sidebar/SidebarLeft'
import CabecalhoGeral from '../components/header/CabecalhoGeral'
import SidebarRight from '../components/sidebar/SidebarRight'
import { HomeBox } from '../components/box/box-Home/HomeBox'

export function Home() {
  return (
    <body className="holy-grail">
      <header>
        <CabecalhoGeral />
      </header>

      <div className="holy-grail-body">
        <section className="holy-grail-content">
          <HomeBox />
        </section>
        <div className="holy-grail-sidebar-1 hg-sidebar">
          <SidebarLeft />
        </div>
        <div className="holy-grail-sidebar-2 hg-sidebar">
          <SidebarRight />
        </div>
      </div>
    </body>
  )
}
