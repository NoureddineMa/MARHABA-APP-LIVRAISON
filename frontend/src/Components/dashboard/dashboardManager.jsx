import React from 'react'

function DashboardManager() {
  return (
      <div className='flex  justify-evenly  '>


        <div className='mt-20       rounded-2xl w-2/5  animate__animated animate__zoomIn  ' style={{backgroundColor:"#153462"}}>
              <h1 className='text-white font-bold text-2xl  User tracking-wide text-center pl-11 mt-11'>Last 2 Commands : </h1>

              <div className='flex justify-between mt-11'>
                 <div className=" p-4 bg-gray-700   m-2 rounded shadow-xl ml-11 mt-4 " >
            <a className="relative block h-48 overflow-hidden rounded">
              <img  className="block h-full  object-cover object-center cursor-pointer" width={400} src="https://foodish-api.herokuapp.com/images/dessert/dessert32.jpg" />
            </a>
            <div className="mt-4">
              <h3 className="title-font mb-1 text-xs tracking-widest text-white">Quantité : 300 Repas </h3>
              <h2 className="title-font text-lg font-bold text-white">Tacos Beldi. <small className='User'>Quantite X 1</small></h2>
              <p className="mt-1 text-white font-light">Price : 80 MAD</p>
              <button className='bg-orange-600 py-2  px-7 rounded mt-5 text-white'>Command this </button>
            </div>
          </div>

          <div className=" p-4  bg-gray-700 m-2 rounded shadow-xl mr-11 mt-4  "  >
            <a className="relative block h-48 overflow-hidden rounded">
              <img  className="block h-full  object-cover object-center cursor-pointer" width={400} src="https://foodish-api.herokuapp.com/images/butter-chicken/butter-chicken4.jpg" />
            </a>
            <div className="mt-4">
              <h3 className="title-font mb-1 text-xs tracking-widest text-white">Quantité : 300 Repas  </h3>
              <h2 className="title-font text-lg font-bold text-white">Pizza.  <small className='User'>Quantite X 3</small></h2>
              <p className="mt-1 text-white font-light">Price : 240 MAD</p>
              <button className='bg-orange-600 py-2 px-7 rounded mt-5 text-white'>Command this </button>
            </div>
          </div>
              </div>

             

        </div>
        <div className='mt-20      rounded-2xl w-2/5 py-10 shadow-xl animate__animated animate__zoomIn' style={{backgroundColor:"#153462"}}>
              <h1 className='User font-bold text-2xl tracking-wide text-center  my-5'>Ajouter un manager</h1>
            <form className="w-3/5 mx-auto">
              <div className='flex items-center space-x-6'>
                </div>

                <label className="text-white text-xs">Choose a picture</label>
                   <input type="file" className="block w-full text-sm rounded text-slate-500 file:mr-4 file:py-2 file:px-4 border file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700hover:file:bg-violet-100 my-3 " />
                


                
                <label className='text-white text-xs' htmlFor="">Name</label>
                 <input type="email" name="email" className=" block w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1 my-3" placeholder="please enter a name" />
                

                 <label className='text-white text-xs' htmlFor="">Adresse Mail</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder="please enter a mail adresse"/>

                 <label className='text-white text-xs' htmlFor="">Phone Number</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder="please enter a phone number" />
                 

                 <label className='text-white text-xs' htmlFor="">Adresse</label>
                 <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 my-3" placeholder="please enter a adresse" />

                 <button class="bg-orange-600 hover:bg-orange-700 my-4  text-white  py-2 px-10 rounded">Modify</button>
            </form>
        </div>

</div>
  )
}

export default DashboardManager