import axios from 'axios';
import { useState } from 'react';
import '../../index.css'
import Nodata from '../../assets/no data.svg'
import me from '../../assets/me.jpg'


function GetUser() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)
  const [Role, setRole] = useState("")
  const [Phone , setPhone ] = useState("")
  const [Email , setEmail ] = useState("")
  const [Adresse , setAdresse ] = useState("")
  const [userName , setUserName] = useState("")


    const getManagerHandler =  () => {
    const token = localStorage.getItem("token")    
    const role = localStorage.getItem("role")
    

    // console.log(token);
    const config = {
        headers: {
          Authorization :  'Bearer ' + token
        },
        withCredentials: true
      }
        const API_URL = `http://localhost:7000/api/user/${role}/me/`
        axios.get(API_URL,config).then((response) => {
        // retrieve details: 
        setAdresse(response.data.user.adresse)
        setEmail(response.data.user.email)
        setPhone(response.data.user.phone)
        setUserName(response.data.user.name)
        setMessage(response.data.message)
        setRole(role)
        setSucces(true)})
        .catch((err) => {
            setMessage(err.response.data.message)
            setSucces(false)
    })
    }
    getManagerHandler()
    return (
<div className='flex  justify-evenly  '>
        <div className='mt-20       rounded-2xl w-2/5 py-10 shadow-xl animate__animated animate__zoomIn' style={{backgroundColor:"#153462"}}>
              <h1 className='User font-bold text-2xl tracking-wide text-center  mt-5'>Modify your profile</h1>
            <form className="w-3/5 mx-auto">
              <div className='flex items-center space-x-6'>
                <div className="shrink-0  mx-auto">
                  {/* we can render img {img} */}
                   <img  className="h-20 w-20 object-cover rounded-full my-10 " src="https://xsgames.co/randomusers/avatar.php?g=male " />
                </div>
                </div>

                <label className="text-white text-xs">Choose a picture</label>
                   <input type="file" className="block w-full text-sm rounded text-slate-500 file:mr-4 file:py-2 file:px-4 border file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700hover:file:bg-violet-100 my-3 " />
                


                
                <label className='text-white text-xs' htmlFor="">Name</label>
                 <input type="email" name="email" className=" block w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 my-3" placeholder={userName} />
                

                 <label className='text-white text-xs' htmlFor="">Adresse Mail</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Email}/>

                 <label className='text-white text-xs' htmlFor="">Phone Number</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Phone} />
                 

                 <label className='text-white text-xs' htmlFor="">Adresse</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder={Adresse} />


                 <label className='text-white text-xs' htmlFor="">Role</label>
                  <select class="mt-1 px-3 py-2 bg-white border cursor-not-allowed shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 block w-full" aria-label="Disabled              select example" disabled>
                      <option selected>{Role}</option>
                 </select>
                 <button class="bg-orange-600 hover:bg-orange-700 my-4  text-white font-bold py-2 px-10 rounded">Modify</button>
            </form>
        </div>
         {/* <p> { succes && message }</p>
         <p> {!succes && message}</p> */}
         <div className='w-2/5'>
           <div className="  py-10  rounded-2xl mb-10  shadow-xl mt-20  animate__animated animate__zoomIn  " style={{backgroundColor:"#153462"}}>
          <h2 className="User font-bold text-2xl tracking-wide text-center my-16">Profile</h2>
              <p className=" text-white text-center font-semibold my-4  text-ce">Username : <span className='text-white font-light'>{userName}</span></p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Role : <span className=' text-white font-light '>{Role}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Adresse : <span className=' text-white font-light '>{Adresse}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Phone : <span className=' text-white font-light '>{Phone}</span> </p>
              <p className=" text-white text-center  font-semibold my-4  text-ce">Email : <span className=' text-white font-light '>{Email}</span> </p>
              
        </div>
        <div className="   rounded-2xl  shadow-xl py-7   animate__animated animate__zoomIn " style={{backgroundColor:"#153462"}}>
          <div className='text-center my-10 py-10'>
         <img className='mx-auto py-10' width={40} height={40} src={Nodata}/>
        <p className='text-white text-lg font-thin'>No Data Available</p>
          </div>
        </div>
         </div>
</div>
    )
}
export default GetUser