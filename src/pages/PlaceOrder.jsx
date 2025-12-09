import React, { useContext } from "react";
import { useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {

  const [method, setMethod] = useState('')
  const {navigate} = useContext(ShopContext)




  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="FirstName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="LastName"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            name=""
            id=""
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          name=""
          id=""
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />

        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* Payment method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'stripe' ? 'bg-green-600' : ''}`}></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />

            </div>
            <div onClick={()=>setMethod('rayzor-pay')} className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-200 rounded-full ${method === 'rayzor-pay' ? 'bg-green-600' : ''}`}></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />

            </div>
            <div onClick={()=>setMethod('cash')} className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cash' ? 'bg-green-600' : ''}`}></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">CASH ON DELIVERY</p>

            </div>


          </div>
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/orders')}  className='bg-black text-white p-3 px-16 mt-8 cursor-pointer'>PLACE ORDER</button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PlaceOrder;

// <div className="flex flex-col items-center justify-center h-96 w-full bg-white rounded-xl shadow-lg p-6 text-center">
//     //   <div className="shadow-lg rounded-xl overflow-hidden mb-3">

//     //   <img
//     //     src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDBvNnBmZXFiMGx0bjJlZHY0N3d3cnRha3E3Y20xdngyd2F1MWsxaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SWoSkN6DxTszqIKEqv/giphy.gif"
//     //     alt="Under Construction"
//     //     className="h-50 w-80 "
//     //   />
//     //   </div>
//     //   <h2 className="text-2xl font-bold mb-2">Page Under Construction</h2>
//     //   <p className="text-gray-500">
//     //     We're working hard to bring this page to you soon!
//     //   </p>
//     // </div>
