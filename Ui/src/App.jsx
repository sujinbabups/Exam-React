
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Firstlayout from './layouts/Firstlayout'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Mainlayout from './layouts/Mainlayout'
import Homepage from './pages/Homepage'
import AddPerson from './pages/AddPerson'
import Indexpage from './pages/Indexpage'



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Firstlayout/>}>
      <Route index element={<Indexpage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>


      </Route>

      <Route path='/' element={<Mainlayout/>}>
      
      <Route path='home' element={<Homepage/>}/>
      <Route path='/new-booking' element={<AddPerson/>}/>

      </Route>

      
      </>
    )
  )
 

  return (
    <>
    <RouterProvider router={router}/>
   
      
    </>
  )
}

export default App
