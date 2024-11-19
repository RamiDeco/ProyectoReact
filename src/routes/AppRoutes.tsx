import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Proyectos from "../pages/Proyectos"
import Experiencia from "../pages/Experiencia"

const AppRoutes:React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/proyectos" element={<Proyectos/>}/>
        <Route path="/experiencia" element={<Experiencia/>}/>
    </Routes>
  )
}

export default AppRoutes