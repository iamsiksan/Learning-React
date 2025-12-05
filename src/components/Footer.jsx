import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.minimal_logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            minus doloribus iure repellat veniam tenetur aspernatur odio harum
            optio? Voluptatem ipsam id minus voluptatum eum doloribus ea ducimus
            quia recusandae.
          </p>
        </div>

        <div >
          <p className="text-xl font-medium mb-5">Company</p>
            <ul className="flex flex-col gap-1 text-gray-600">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy</li>
            </ul>
          
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-222-343-2325</li>
            <li>contact@minimal.com</li>

          </ul>
        </div>

        
      </div>
      <div>
          <hr className="bg-gray-300 h-px border-0" />
          <p className="py-5 text-sm text-center text-gray-500">Copyright 2025@ minimal.com - All Rights Reserved</p>
        </div>
    </div>
  );
}

export default Footer;
