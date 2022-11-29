import {useState} from 'react';
import image from '../assets/logo.png'
import '../index.css'
import { Link , useNavigate } from 'react-router-dom'
import axios from 'axios';
import { showMessage } from './utiles/showMessage';






const  Login = () =>  {


    

    const navigate = useNavigate();
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [Message, setMessage] = useState("")
    const [Error , setError] = useState(false);
    const [ErrorInput , setErrorInput ] = useState(false)
  
    const handleEmail = (e)=>{
        return setEmail(e.target.value)
      }
      const handlePassword = (e)=>{
        return setPassword(e.target.value)
      }

    

      const API_URL = "http://localhost:7000/api/auth/login"
      const loginHandler = async () => {
        const user = {
            email,
            password,
        }
        try {
            const result = await axios.post(API_URL , user)
            const token = result.data.token
            const role = result.data.nameRole
            const Username = result.data.user.name
            localStorage.setItem("role", role)
            localStorage.setItem("token", token)
            localStorage.setItem("User", Username)
            setError(false)
            navigate('/dashboard')
          } catch (error) {
            setMessage(error.response.data.message)
            setError(true)
          }

          if(!email  && !password){
            setErrorInput(true)
            return false;
           }
            
      }
    return (
       
        <div 

        data-testid ="Login"
        className='bg-gray-200 rendred  px-20 py-8  shadow-xl  rounded-2xl border-2  animate__animated animate__zoomIn    border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        <h1 
        className='mt-2 mb-2 text-center text-3xl font-bold tracking-tight ' style={{color:"#153462"}}>Welcome Back
        </h1>

        <p 
        className='text-xs font-medium ' style={{color:"#153462"}}>Welcome Back please enter your details
        </p>
        
        {Message && showMessage( Error ,  Message)}

        <div 
        className='mt-4 '>
        <div>
 
       <label htmlFor="email" classname="text-xs font-medium" style={{color:"#153462"}}>Email</label>

        <input 
        id="email" 
        name="email" 
        type="email" 
        autoComplete="email" 
        value={email}
        onChange={handleEmail}
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email address" />

       { ErrorInput && !email && <span className='msgError'>please enter a  email</span>}

        <label 
        htmlFor="password" 
        className='text-xs font-medium' style={{color:"#153462"}}>password
        </label>
        <input 
        id="password" 
        name="password" 
        autoComplete="password" 
        required 
        type="password" 
        value={password}
        onChange={handlePassword}
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter a password" />
        { ErrorInput && !password && <span className='msgError'>please enter a  password</span>}
        </div>
                
        <div 
        className='flex flex-row place-items-center justify-between mt-3'>
        <div 
        className="flex items-center mb-4">


        </div>
        <div 
        className='flex  flex-col   align-items-center justify-content-center'>
        <Link  
        to="/forgotpassword" 
        className=' text-center mb-4 text-xs font-medium ' style={{color:"##fb7185"}}>forgot password? 
        </Link>
        </div>
        </div>
                    

        <p 
        className='text-xs text-black-500 text-center mt-3'>You dont have an account? <br /> 
        <Link 
        to="/Register" 
        className=' underline' style={{color:"#153462"}}>click here to Register
        </Link> 
        </p>
                    
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3  text-white  font-bold rounded-xl' style={{backgroundColor:"#153462"}}
        onClick={loginHandler}>Sign in
        </button>
        </div>
        </div>
        </div>
    )
}

    export default Login;
    