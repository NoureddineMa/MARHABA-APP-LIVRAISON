import { Outlet} from 'react-router-dom'
import NavBarUser from './navBarUser'


function Dashboard() {

  const Name = localStorage.getItem("User")
  const Role = localStorage.getItem("role")

  return (
  <div> 
   <NavBarUser />
   
   <h1 className=' flex align-middle text-center mt-11   justify-center  text-4xl font-bold text-white  '>
      Hey  { Name }   Welcome To  Your <br /> Space  { Role }
    </h1> 
   
   <Outlet />
  </div>  
  )
} 
export default Dashboard