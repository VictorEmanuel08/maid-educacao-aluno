//aulas

const figura = document.createElement('png');

var diretorio = '../../assets/images/home/AulasBanner/'

var numero = 0;

var intervalo = window.setInterval(visualizar, 1000)
function visualizar() {
      figura.src = diretorio + numero + '.png'
      document.body.appendChild(figura);
      numero++;
  }

figura.onerror = function() {
  clearInterval(intervalo);
}

const basicFetch = async (endpoint) => {
  const req = await fetch(`${diretorio}${endpoint}`)
  const json = await req.json()
  return json
}

export default {
  getHomeList: async () => {
    return [
      {
        title: 'Aulas',
        items: []
      }
    ]
  }
}
