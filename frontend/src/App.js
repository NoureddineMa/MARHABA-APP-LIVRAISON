import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import Forgotpassword from './Components/forgotpassword'
import VerifyEmail from './Components/auth/verifyEmail'
import Resetpassword from './Components/ResetPassword'
import PageNotFound from './Components/no results/404'
import GetUser from './Components/dashboard/getUserProfile'
import Dashboard from './Components/dashboard/dashboard'
import Homepage  from './Components/HeroSection/homepage'

import DashboardClient from './Components/dashboard/dashboardClient'
import DashboardLivreur from './Components/dashboard/dashboardLivreur'
import DashboardManager from './Components/dashboard/dashboardManager'


import img from './assets/bak.png'
import './index.css'

import {BrowserRouter as Router  ,  Routes , Route, Navigate   } from 'react-router-dom'

function App() {

  const role = localStorage.getItem("role")

  function ComponenetsByRole(){
    if(role == "manager"){
      return <DashboardManager />
    } else if (role == "client"){
      return <DashboardClient />
    } else {
      return <DashboardLivreur />
    }
  }

  
  return (
    <Router>
    <div className='flex w-full h-screen '  style={{backgroundImage: `url(${img})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',}}>
    <Routes>  
    <Route path='/' element={<Homepage />} />
      <Route path='/*' element={<PageNotFound />} />
      <Route element={<Background />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>    
        <Route path='/register/verify/:token' element={<VerifyEmail />}/>
        <Route path='/forgotpassword' element={<Forgotpassword />}/>
        <Route path='/resetpassword/:token' element={<Resetpassword />}/>
      </Route>
      <Route path='/dashboard' element={<Dashboard />}>
      <Route path='menu' element={ComponenetsByRole()}  />
      <Route path='me'  element={ role ? (<GetUser />) : <Navigate to="/login" />  }/>
      </Route>
    </Routes>
    </div>
    </Router>
  )
}
export default App;
