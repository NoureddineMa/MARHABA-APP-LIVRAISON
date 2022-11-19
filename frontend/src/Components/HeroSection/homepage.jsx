import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'





function homepage() {
  return (
    
    <div className="grid px-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 " 
     >
     <nav className="dark:bg-gray-800  px-2 sm:px-4 py-2.5 navbar fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" className="flex items-center">
      <h3 className='px-10 User'>MARHABA RESTAURANT</h3>
    </Link>
    <div className="flex md:order-2">
      <Link to="" type="button" className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center mr-3  px-10 md:mr-0 started">Contact Us</Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-white md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className=" text-center  place-self-center lg:col-span-12 " 
    >
      <p className="max-w-2xl mb-4 text-8xl  text-center font-extrabold tracking-tight leading-none md:text-10xl xl:text-10xl text-white  ">MARHABA  RESTAURANT </p>
      <p   className="max-w-2xl mb-6  text-gray-500 lg:mb-8 text-base font-medium capitalize dark:text-white">Si la pizza est le grand classique de la livraison de repas à domicile, cela ne veut pas pour autant dire qu’elle ne fait pas face à une concurrence de plus en plus redoutable. Dans cet article, nous verrons des exemples de branding de livraison de repas dignes d’une étoile Michelin, avec notamment des emballages innovants et écologiques, et des expériences personnalisées. C’est parti !.</p>
      <Link to="/login" className="inline-flex items-center justify-center px-8 hover:shadow-lg  hover:scale-110 py-3  mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white Login">
       Login
      </Link>
      <Link to="/register" className=" register inline-flex items-center justify-center  hover:scale-110 hover:shadow-lg px-8 py-3 text-base font-medium text-center bg-violet-800 rounded-lg focus:ring-4 ">
        Register
      </Link> 
    </div>
  </div>
  )
}
export default homepage