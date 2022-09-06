import './ProgressoBox.scss'
// import GaugeChart from 'react-gauge-chart'
import Gauge from 'react-svg-gauge'

export function ProgressoBox() {
  return (
    <div>
      <div className="boxProg">
        <div className="container-progresso">
          <h1>Geral/ Matemática</h1>
          <div className="container-progresso-box">
            <div className="esquerda">
              <div className="notas">
                <h1>Atividades</h1>
                <p>Média 7/10</p>
                <p>Quantidade Realizada: 6/5</p>
                <p>Tempo médio: 33,5 minutos</p>
              </div>
              <div className="simulados">
                <h1>Simulados</h1>
                <p>Média 7/10</p>
                <p>Quantidade Realizada: 6/5</p>
                <p>Tempo média: 33,5 minutos</p>
              </div>
            </div>
            <div className="direita">
              <h1>Aulas</h1>
              <div className="grafico-aula">
                <Gauge
                  label=""
                  min={0}
                  max={100}
                  value={45}
                  width={200}
                  height={200}
                  color="#18C4B3"
                />
              </div>
              <div className="materiais">
                <h1>Materiais de apoio</h1>
                <div className="grafico-materiais">
                  <Gauge
                    label=""
                    min={0}
                    max={100}
                    value={90}
                    width={200}
                    height={200}
                    color="#18C4B3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
