import {useState} from 'react';
import image from '../assets/logo.png'
import '../index.css'
import axios from 'axios';
import { showMessage } from './utiles/showMessage';


const Forgotpassword = () => {

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isError, setError] = useState(false)
    const [ErrorInput , setErrorInput] = useState(false)

    const handleEmail = (e)=>{
        return setEmail(e.target.value)
      }

    const API_URL = 'http://localhost:7000/api/auth/forgetpassword';

    const submitHandler = async () => {
        const user = {
            email,
        }
        try {
           const result = await axios.post(API_URL , user)
           setMessage(result.data.message)
          } catch (error) {
            setMessage(error.response)
            setError(true)
          }

          if(!email){
            setErrorInput(true)
            return false
          }
      }

    return (
        <div 
        className='bg-gray-200 px-20 py-5 shadow-xl animate__animated animate__zoomIn rounded-2xl border-2 border-gray-200 flex flex-col place-items-center'>

        <img
        src={image} 
        alt="img" 
        className='logo' />

        <h1 
        className='mt-2  text-center mb-5 text-3xl font-bold tracking-tight ' style={{color:"#153462"}}>Reset Password
        </h1>

        <p 
        className='text-xs text-center font-medium ' style={{color:"#153462"}}>enter your email to reset  <br />your password
        </p>
        { message && showMessage( isError , message)}
        <div 
        className='mt-4 '>
        <div>
 
        <label 
        for="email" 
        className='text-xs font-medium' style={{color:"#153462"}}>Email
        </label>
        <input 
        id="email" 
        name="email" 
        type="email" 
        autoComplete="email" 
        value={email}
        onChange={handleEmail}
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your email " />

        {ErrorInput && !email && <span className='msgError'> Please add your email </span>}
        </div>
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        style={{backgroundColor:"#153462"}}
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3  text-white  font-bold rounded-xl' onClick={submitHandler}>
            Send Mail
        </button>
        </div>
        </div>
        </div>
    )
}

export default Forgotpassword;