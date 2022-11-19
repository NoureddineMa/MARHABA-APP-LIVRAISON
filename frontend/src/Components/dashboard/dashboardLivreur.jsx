import React from 'react'
import map from '../../assets/map.PNG'
import '../../index.css'

function DashboardLivreur() {
  return (
    <div className="mt-10  container mx-auto px-6 py-10">

  
  <section className=" body-font text-gray-600  ml-8">

    <div className="container mx-auto  py-10 ">
      <div className="-m-4 flex flex-wrap  ">
        <div className=" p-4   m-2 shadow-xl animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Disponible</h3>
            <h2 className="title-font text-lg font-bold User">Salad</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button className='bg-orange-500 py-2 px-7 rounded mt-5 text-white'>Take this livraison</button>
          </div>
        </div>

        <div className=" p-4  m-2  animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Disponible</h3>
            <h2 className="title-font text-lg font-bold User">Sandwich</h2>
            <p className="mt-1 text-gray-400 font-light ">01/09/2022 - 19 :03 PM</p>
            <button className='bg-orange-500 py-2 px-7 rounded mt-5 text-white'>Take this livraison</button>
          </div>
        </div>

        <div className=" p-4  m-2 animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Indisponible</h3>
            <h2 className="title-font text-lg font-bold User">Bread</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button type="button" className='bg-red-700 py-2 px-7 rounded mt-5  text-white cursor-not-allowed' disabled>Closed</button>

          </div>
        </div>

        <div className=" p-4  m-2  animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Indisponible</h3>
            <h2 className="title-font text-lg font-bold User">Steak</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button type="button" className='bg-red-700 py-2 px-7 rounded mt-5  text-white cursor-not-allowed' disabled>Closed</button>
          </div>
        </div>

        <div className=" p-4  m-2 animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Disponible</h3>
            <h2 className="title-font text-lg font-bold User">Tuna Steak.</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button className='bg-orange-500 py-2 px-7 rounded mt-5 text-white'>Take this livraison</button>
          </div>
        </div>

        <div className=" p-4  m-2 animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Indisponible</h3>
            <h2 className="title-font text-lg font-bold User">Fish</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button type="button" className='bg-red-700 py-2 px-7 rounded mt-5  text-white cursor-not-allowed' disabled>Closed</button>
          </div>
        </div>

        <div className=" p-4  m-2 animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Disponible</h3>
            <h2 className="title-font text-lg font-bold User">Shrimp.</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button className='bg-orange-500 py-2 px-7 rounded mt-5 text-white'>Take this livraison</button>
          </div>
        </div>

        <div className=" p-4  m-2 animate__animated animate__zoomIn" style={{backgroundColor:"#153462"}}>
          <a className="relative block h-48 overflow-hidden rounded">
            <img  className="block h-full  object-cover object-center cursor-pointer" src={map} />
          </a>
          <div className="mt-4">
            <h3 className="title-font mb-1 text-xs tracking-widest text-white">Commande : Disponible</h3>
            <h2 className="title-font text-lg font-bold User">Rice.</h2>
            <p className="mt-1 text-gray-400 font-light">01/09/2022 - 19 :03 PM</p>
            <button className='bg-orange-500 py-2 px-7 rounded mt-5 text-white'>Take this livraison</button>
          </div>
        </div>

      </div>
    </div></section>
</div>

  )
}

export default DashboardLivreur