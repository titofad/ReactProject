import React from 'react'
import SammyShopping from "../assets/SammyShopping.gif";

function Login() {
  return (
    <div className='h-screen w-screen bg-slate-600'>
      <div className='grid grid-cols-2'>
        <div className='bg-blue-400 h-screen w-full flex justify-center items-center'>
          <img src={SammyShopping} alt="" />
        </div>
        <div className='col-span-1 bg-white flex flex-col justify-center items-center'>
       <form className='shadow h-[55%] w-[90%] px-3 pb-3 pt-5 rounded'>
       <h1 className='font-bold text-3xl text-center mb-4'>Login</h1>
      <input type="text" className='border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-white' />
        <input type="password" className='border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-white'/>
        <button className='h-12 w-[50%] bg-blue-400 rounded text-white mx-[25%]'>Login</button>
         </form>
       </div>
      </div>
       
    
    </div>
  );
}

export default Login