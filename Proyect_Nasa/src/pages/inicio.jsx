import React from 'react'
import { Card } from '../components/card'
import { Layout } from '../components/layout'
import { NavBar } from '../components/navBar'
export const Inicio = () => {
  return (
    
    <Layout>
      <NavBar></NavBar>
     <div className="fondo m-0">
      <Card></Card>
    </div>
      
    </Layout>
  )
}
