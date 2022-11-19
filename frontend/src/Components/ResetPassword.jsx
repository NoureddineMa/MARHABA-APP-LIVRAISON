import {useState} from 'react';
import image from '../assets/logo.png'
import '../index.css'
import axios from 'axios';
import {useParams , useNavigate , Link } from 'react-router-dom';
import { showMessage } from './utiles/showMessage';


const  ResetPassword = () =>  {

    const navigate = useNavigate();
    const {token} = useParams();
    const [password , setPassword] = useState("");
    const [message , setMessage] = useState("");
    const [isError , setIsError] = useState(false)
    const [errorInput , setErrorInput] = useState(false)

    const handleEmail = (e) => {
        return setPassword(e.target.value)
    }

    const API_URL = `http://localhost:7000/api/auth/resetpassword/${token}`

    const resetPassword = async () => {

     const 
     user= {
        password,
     }   
     try {
        const result = await axios.post(API_URL, user)
        setMessage(result.data.message)
        setIsError(false)
       
     } catch (error) {
        console.log(error)
        setIsError(true)
     }

     if (!password )
        setErrorInput(true)
        return true;
    }

    return (
        <div 
        className='bg-gray-200 px-20 py-5 animate__animated animate__zoomIn  shadow-xl rounded-2xl border-2 border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        
        <p 
        className='text-lg text-center font-bold tracking-tight ' style={{color:"#153462"}}>enter your new password
        </p>
        <div 
        className='mt-4 '>
        <div>

        <p className='text-white'>  { message &&  showMessage( isError , message)}
</p>
 
        <label 
        for="Password" 
        className='text-xs font-medium' style={{color:"#153462"}}>Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password" 
        value={password}
        onChange={handleEmail}
        autocomplete="Password" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your new Password " />

        {errorInput && !password && <span className='msgError'>Password Required</span>}


        <label 
        for="NewPassword" 
        className='text-xs font-medium' style={{color:"#153462"}}>Confirm Password
        </label>
        <input 
        id="NewPassword" 
        name="NewPassword" 
        type="password" 
        autocomplete="NewPassword" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="confirm Password " />
                {errorInput && !password && <span className='msgError'>Password Required</span>}


        </div>

        
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 text-white   rounded-xl' style={{backgroundColor:"#153462"}}
        onClick={resetPassword}>Reset password 
        </button>
        <button className=' active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-orange-500 text-white   rounded-xl'>
        <Link  to="/login" className='text-sm'>
            go to page login
        </Link>
        </button>
        
        </div>
        </div>
        </div>
    )
}

export default ResetPassword;