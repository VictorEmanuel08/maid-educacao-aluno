import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Materias } from './pages/Materias'
import { Atividades } from './pages/Atividades'
import { Progresso } from './pages/Progresso'
import { Calendario } from './pages/Calendario'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/progresso" element={<Progresso />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
