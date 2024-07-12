import React from 'react'
import Firstnavbar from '../components/Firstnavbar'
import { Outlet } from 'react-router-dom'
import Center from '../components/Center'
// import Footer from '../components/Footer'

const Firstlayout = () => {
  return (
    <>
    <Firstnavbar/>
   
    
    <Outlet/>
    
    
    </>
  )
}

export default Firstlayout
