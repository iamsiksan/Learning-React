import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from '../components/CartTotal'

function Cart() {

  const {products,currency,cartItems,updateQuantity} = useContext(ShopContext)
  const [cartData, setCartData] = useState([])



  useEffect(() => {

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if (cartItems[items][item]>0) {
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
          
        }
      }
    }
    setCartData(tempData);
    
    
  }, [cartItems])
  



  return (
    <div className='border-t border-gray-300 pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'} />

      </div>

      <div className=''>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=>product._id==item._id);

            return(
              <div className='py-4 border-t border-b border-gray-300 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-center gap-6'>
                  <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2 '>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-0 border border-gray-300 bg-slate-50'>{item.size}</p>

                    </div>
                  </div>

                </div>

                <input onChange={(e)=>e.target.value === '' || e.target.value ==='0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border border-gray-400 max-w-7 sm:max-w-12 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id,item.size,0)} src={assets.bin_icon} className='w-4 mr-4 sm:w-5 cursor-pointer' alt="" />


              </div>
            )

          })
        }

      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />

        </div>

      </div>

    </div>
  )
}

export default Cart





























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