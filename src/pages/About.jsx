import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'


function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'}  />


      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus doloribus veniam facilis? Sit, nisi. Esse, est modi, aliquam laudantium officiis quas quod sapiente adipisci accusamus sint cumque porro, sunt dolore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum ipsum, suscipit soluta magni reprehenderit voluptas repellendus. At animi excepturi natus adipisci facilis. Enim nemo nihil est quas nostrum tempore.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eos maiores architecto expedita et, mollitia impedit quia consequatur officiis, fuga modi nemo? Eius ad officia nulla at voluptatem, modi vitae.</p>
        </div>

      </div>


      <div>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugit, hic adipisci sequi voluptate magnam delectus quis at, aperiam assumenda itaque, reprehenderit libero nemo quaerat corporis ipsam explicabo quod sint.</p>
          

        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convience</b>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugit, hic adipisci sequi voluptate magnam delectus quis at, aperiam assumenda itaque, reprehenderit libero nemo quaerat corporis ipsam explicabo quod sint.</p>


        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia fugit, hic adipisci sequi voluptate magnam delectus quis at, aperiam assumenda itaque, reprehenderit libero nemo quaerat corporis ipsam explicabo quod sint.</p>


        </div>

      </div>
      <NewsLetterbox />
    </div>
    
  )
}

export default About



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