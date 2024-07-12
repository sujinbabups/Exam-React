import React from 'react'
import NavbarHomepage from '../components/NavbarHomepage'
import { Outlet } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Mainlayout = () => {
  return (
   <>
   <NavbarHomepage/>
   <Outlet/>
   <ToastContainer/>

   </>
  )
}

export default Mainlayout
