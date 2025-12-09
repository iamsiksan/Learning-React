import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-gray-500 text-xl font-semibold'>Our Store</p>
          <p className='text-gray-500'>54710 William Station <br /> suite 350, Washington , USA</p>
          <p className=' text-xm text-gray-500'>Tel : (056) 550-737 <br /> Email: admin@minimal.com</p>
          <p className='font-semibold text-xl text-gray-500'>Careers at Minimal. </p>
          <p className='font-sm text-gray-500'>Explore careers at Minimal.</p>
          <button className='bg-black px-5 py-3 text-sm text-white'>Explore Jobs</button>

        </div>
      </div>
    </div>
  )
 
}

export default Contact




 //   <div className="flex flex-col items-center justify-center h-96 w-full bg-white rounded-xl shadow-lg p-6 text-center">
  //     <div className="shadow-lg rounded-xl overflow-hidden mb-3">

  //     <img
  //       src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBvNnBmZXFiMGx0bjJlZHY0N3d3cnRha3E3Y20xdngyd2F1MWsxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif"
  //       alt="Under Construction"
  //       className="h-50 w-80 "
  //     />
  //     </div>
  //     <h2 className="text-2xl font-bold mb-2">Page Under Construction</h2>
  //     <p className="text-gray-500">
  //       We're working hard to bring this page to you soon!
  //     </p>
  //   </div>
  // )