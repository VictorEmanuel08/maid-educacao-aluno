import './MateriasBox.scss'
import portuguesImg from '../../../assets/images/materias/Portugues/Portugues.png'
import MatematicaImg from '../../../assets/images/materias/Matematica/Matematica.png'
import HistoriaImg from '../../../assets/images/materias/Historia/Historia.png'
import GeografiaImg from '../../../assets/images/materias/Geografia/Geografia.png'
import FisicaImg from '../../../assets/images/materias/Fisica/Fisica.png'
import QuimicaImg from '../../../assets/images/materias/Quimica/Quimica.png'
import BiologiaImg from '../../../assets/images/materias/Biologia/Biologia.png'
import FilosofiaImg from '../../../assets/images/materias/Filosofia/Filosofia.png'

export function MateriasBox() {
  return (
    <div>
      <div className="box">
        <div className="container-box-materias">
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={portuguesImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={MatematicaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={HistoriaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={GeografiaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={FisicaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={QuimicaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={BiologiaImg} className="Materia" />
            </a>
          </div>
          <div className="grid-item">
            <a href="//www.youtube.com" target="_blank">
              <img src={FilosofiaImg} className="Materia" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
