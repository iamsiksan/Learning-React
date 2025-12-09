import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";

function Orders() {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 border-gray-300">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b border-gray-300 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center  gap-3 mt-2 text-base text-gray-700">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>

                </div>
                  <p className="mt-2">
                    Date <span className="text-gray-400">25 ,July 2025</span>
                  </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
            <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-600"></p>
              <p className="text-sm md:text-base">Ready to ship</p>

            </div>
            <button className="border border-gray-500 cursor-pointer px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;

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
