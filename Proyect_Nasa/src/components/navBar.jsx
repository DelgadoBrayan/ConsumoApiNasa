import React from 'react'
import { NavLink } from 'react-router-dom'
 const hoverLink = "text-slate-100 mr-5 hover:-translate-y-1.5 hover:scale-110 hover:text-blue-500 duration-300"
export const NavBar = () => {
  return (
    <header className=" text-white-500 body-font bg-stone-900">
  <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center h-20" >
      <img  className='w-20 h-16 ml-10' src="src/assets/img/logoNasa.png" alt="" />
  
    <nav className="md:ml-auto flex flex-wrap items-center  text-2xl justify-center ">
    <a className={hoverLink}>
      <NavLink to='/'>
     HOME
      </NavLink>
      </a>
      <a className={hoverLink}>
      <NavLink to='curiosity'>
      CURIOSITY 
      </NavLink>
      </a>
      <a className={hoverLink}>
      <NavLink to='login'>
      LOGIN 
      </NavLink>
      </a>
    </nav>
    
  </div>
</header>
  )
}
