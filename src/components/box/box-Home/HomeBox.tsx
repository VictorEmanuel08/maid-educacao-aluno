import BannerImg from '../../../assets/images/home/BANNER.png'
import BannerAula1 from '../../../assets/images/home/AulasBanner/01BANNER.png'
import BannerAula2 from '../../../assets/images/home/AulasBanner/02BANNER.png'
import BannerAula3 from '../../../assets/images/home/AulasBanner/03BANNER.png'
import BannerAula4 from '../../../assets/images/home/AulasBanner/04BANNER.png'
import BannerAula5 from '../../../assets/images/home/AulasBanner/05BANNER.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import perfilImg from '../../../assets/images/home/cabeçalho/PERFIL/PERFIL@2x.png'

import { useNavigate } from 'react-router-dom'
import { Button } from '../../Button'
import './HomeBox.scss'

export function HomeBox() {
  const navigate = useNavigate()

  const playAula = () => {
    navigate('/')
  }

  async function SendQuestion() {
    navigate('/')
  }

  return (
    <div>
      <div className="home-box-geral">
        <div className="container-box">
          <img src={BannerImg} alt="Banner" />
          <h1>Aulas do dia</h1>
          <div className="atalhoDeAulas">
            <div className="items">
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula1} alt="Banner Aula 1" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img
                    className="Aula2"
                    src={BannerAula2}
                    alt="Banner Aula 2"
                  />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula3} alt="Banner Aula 3" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula4} alt="Banner Aula 4" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula5} alt="Banner Aula 5" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula5} alt="Banner Aula 5" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula5} alt="Banner Aula 5" />
                </a>
              </div>
              <div className="item">
                <a href="//www.youtube.com" target="_blank">
                  <img src={BannerAula5} alt="Banner Aula 5" />
                </a>
              </div>
            </div>
          </div>
          <div className="lembretes">
            <div className="container-atividade">
              <div className="atividades">
                <h1>Atividades</h1>
                <div className="atividade1">
                  <h3>Revisão Integral e Derivada - MTM</h3>
                </div>
                <div className="atividade2">
                  <h3>Pronomes 2 - PRT</h3>
                </div>
                <div className="atividade3">
                  <h3>Simulado 1 - GEO</h3>
                </div>
                <div className="atividade4">
                  <h3>Revisão 2 Guerra Mundial - HST</h3>
                </div>
              </div>
            </div>
            <div className="container-materiais">
              <div className="materiais-apoio">
                <h1>Materiais de apoio</h1>
                <div className="materiais1">
                  <h3>Calculo1.pdf - MTM</h3>
                </div>
                <div className="materiais2">
                  <h3>Capitães de Areia.pdf - PRT</h3>
                </div>
                <div className="materiais3">
                  <h3>Dicionário Atualizado.pdf - PRT</h3>
                </div>
                <div className="materiais4">
                  <h3>Geografia do Brasil.pdf - GEO</h3>
                </div>
              </div>
            </div>
            <div className="container-aulas">
              <div className="aulas-anteriores">
                <h1>Aulas Anteriores</h1>
                <div className="aula1">
                  <div className="play" onClick={playAula}>
                    <PlayArrowIcon style={{ fontSize: 25 }} />
                  </div>
                  <h3>Integral e Derivadas 1 - MTM</h3>
                </div>
                <div className="aula2">
                  <div className="play" onClick={playAula}>
                    <PlayArrowIcon style={{ fontSize: 25 }} />
                  </div>
                  <h3>Guerra Mundiais - HST</h3>
                </div>
                <div className="aula3">
                  <div className="play" onClick={playAula}>
                    <PlayArrowIcon style={{ fontSize: 25 }} />
                  </div>
                  <h3>Território Brasileiro - GEO</h3>
                </div>
                <div className="aula4">
                  <div className="play" onClick={playAula}>
                    <PlayArrowIcon style={{ fontSize: 25 }} />
                  </div>
                  <h3>Arte Barroca - ART</h3>
                </div>
                <div className="aula5">
                  <div className="play" onClick={playAula}>
                    <PlayArrowIcon style={{ fontSize: 25 }} />
                  </div>
                  <h3>Integral e Derivadas 2 - MTM</h3>
                </div>
                <div className="todas-disciplinas">
                  <h3>Todas as Disciplinas</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="Forum">
            <h1>Fórum</h1>
            <div className="fazer-pergunta">
              <form className="area-pergunta">
                <input type="text" placeholder="Escreva aqui..." />
                {/* ENVIAR PERGUNTA */}
              </form>
              <Button type="submit" onClick={SendQuestion}>
                ENVIAR
              </Button>
            </div>
            <div className="container-conversa">
              <div className="pergunta-primaria">
                <div className="avatar">
                  <img src={perfilImg} alt="Avatar" />
                </div>
                <b>João - 9º C</b>
                <div className="pergunta">
                  <h3 className="titulo">Exemplo</h3>
                  <p className="texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin rutrum accumsan lectus, ac ultrices ex ultricies eget.
                    Praesent placerat lacus risus, sed ultrices dui convallis
                    eu. Etiam vestibulum neque id massa accumsan pretium.
                    Praesent aliquam laoreet arcu pharetra condimentum.
                  </p>
                </div>
              </div>
              <div className="resposta-primaria">
                <div className="avatar">
                  <img src={perfilImg} alt="Avatar" />
                  <b className="avatarNome">Pedro - 9° D</b>
                </div>
                <div className="resposta">
                  <p className="texto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin rutrum accumsan lectus, ac ultrices ex ultricies eget.
                    Praesent placerat lacus risus, sed ultrices dui convallis
                    eu. Etiam vestibulum neque id massa accumsan pretium.
                    Praesent aliquam laoreet arcu pharetra condimentum.
                  </p>
                </div>
                <div className="fazer-comentario">
                  <form className="area-comentario">
                    <input type="text" placeholder="Escreva aqui..." />
                    {/* ENVIAR PERGUNTA */}
                  </form>
                  <Button type="submit" onClick={SendQuestion}>
                    ENVIAR
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
