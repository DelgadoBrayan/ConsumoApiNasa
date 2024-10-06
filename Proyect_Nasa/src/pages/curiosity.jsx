import React from 'react'
import MarsRoverPhotos from '../components/cusiosity/data'
import { Layout } from '../components/layout'
import { NavBar } from '../components/navBar'

export const Curiosity = () => {
  return (
    <>
    <Layout>
        <NavBar></NavBar>
        <MarsRoverPhotos></MarsRoverPhotos>
    </Layout>
    </>
  )
}
