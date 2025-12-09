import React from 'react'
import { useState } from 'react'

function Login() {

  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = async (e)=>{
    e.preventDefault();


  }





  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

      </div>
      {currentState == 'Login' ? '' : 

      <input type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800' required />
}
      <input type="text" placeholder='Email' className='w-full px-3 py-2 border border-gray-800' required />
      <input type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800' required />
      <div className='w-full flex justify-between text-sm -mt-2'>

        <p className='cursor-pointer'>Forgot password ?</p>
        {
          currentState == 'Login'
          ? <p onClick={()=>setCurrentState('Signup')} className='cursor-pointer font-semibold underline'>Create Account</p>
          : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer font-semibold'>Login Here</p>
        }

      </div>
      <button  className='bg-black px-16 p-2 text-white cursor-pointer'>{currentState == 'Login' ? 'Login' : 'Signup'}</button>
    </form>
  )
}

export default Login





// <div className="flex flex-col items-center justify-center h-96 w-full bg-white rounded-xl shadow-lg p-6 text-center">
//   <div className="shadow-lg rounded-xl overflow-hidden mb-3">

//   <img
//     src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBvNnBmZXFiMGx0bjJlZHY0N3d3cnRha3E3Y20xdngyd2F1MWsxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif"
//     alt="Under Construction"
//     className="h-50 w-80 "
//   />
//   </div>
//   <h2 className="text-2xl font-bold mb-2">Page Under Construction</h2>
//   <p className="text-gray-500">
//     We're working hard to bring this page to you soon!
//   </p>
// </div>