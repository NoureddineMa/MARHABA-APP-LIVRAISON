import '../index.css'
import backg from '../assets/backg.png';
import { Outlet } from 'react-router-dom';



export default function form() {
    return (
        <>
    <div className='w-full flex items-center justify-center lg:w-1/2'>

                <Outlet />
    </div>
            <div 
            className=' lg:flex  h-full w-1/2 items-center justify-center relative' 
            style={{backgroundImage: `url(${backg})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',}}>
            <h1 
            className='absolute bottom-20 text-lg left-500 text-white text-center italic'>I’m the pizza protector. I will defend each slice to your door. <br /> 
            <span 
            className=' text-xs text-orange-500'>u want to become delivery men ? Or You need to command food ! 
            </span> <br /> Join The  FastestGrowing Driver Community! </h1>
            </div>
        </>
)}