import './style.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Login } from '../pages/login'
import { Curiosity } from '../pages/curiosity'
import { Inicio } from '../pages/inicio'
import { NavBar } from '../components/navBar'


export const Home = () => {
  const AppRoutes =() =>{
      let routes= useRoutes([
          {path: '/', element: <Inicio/> },
          {path: 'curiosity', element:<Curiosity/> },
          {path: 'login', element:<Login/>}
      ])
      return routes
  }
return (
  <BrowserRouter>
  <AppRoutes>
      
      <Inicio/>
  </AppRoutes>
  </BrowserRouter>
    
)
}