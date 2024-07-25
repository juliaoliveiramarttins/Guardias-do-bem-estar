import { Route, Routes } from 'react-router-dom'

import Login from './components/Login/login'
import Cadastro from './components/cadastro/cadastro'
import Voluntaria from "./components/voluntária/Voluntaria"
import Credit from "./components/agradecimento/Credit"
import Formulario from "./components/voluntária/formulario/Formulario"
import Confirmacao from "./components/voluntária/Confirmacao/Confirmacao"
import Homepage from './components/Home/Homepage'
import Perfil from './components/Perfil/Perfil'
import Post from './components/UserPost/Post'


const AppRoutes = () => {
  return (
    // Rotas da aplicação
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/voluntaria" element={<Voluntaria />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/confirmacao" element={<Confirmacao />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/post" element={<Post />} />
      {/* Outras rotas aqui*/}
    </Routes>
  )
}

export default AppRoutes
