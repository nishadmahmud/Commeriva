import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className="bg-white w-10/12 mx-auto mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Large Left Card */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm col-span-1">
         
          <h2 className="text-4xl font-bold mt-2 mb-3">
            Our Products
          </h2>
          <p className="text-gray-600 text-xl mb-6 md:w-xl">
           Increase throughput and grow sales with an optimized and integrated supply chain ecosystem. Trusted by 1000+ businesses.
          </p>

          {/* Mock Icons */}
          <div className="flex items-center justify-center space-x-4">
            <Image className="w-60 mt-4" width={500} height={400} alt="our-products" src='/ourP.png'></Image>
          </div>
        </div>

       <div className="space-y-3">
         {/* Top Right Card */}
        <div className=" text-black border border-gray-200 rounded-3xl p-8 shadow-sm flex items-center justify-between overflow-hidden">
  {/* Text Section */}
  <div className="max-w-md">
    <p className="text-xs font-semibold tracking-wider text-blue-400">Products 01</p>
    <h3 className="text-2xl font-bold mt-2 mb-3">
      E-Commerce Suite →
    </h3>
    <p className="text-gray-500">
     A dynamic, scalable, and fully integrated suite of e-Commerce and D2C business applications.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0">
    <img
      src="/e-commarce.png"
      alt="Decorative"
      className="h-40 w-auto object-contain"
    />
  </div>
</div>


        {/* Bottom Right Card */}
        <div className=" text-black border border-gray-200 rounded-3xl p-8 shadow-sm flex items-center justify-between overflow-hidden">
  {/* Text Section */}
  <div className="max-w-md">
    <p className="text-xs font-semibold tracking-wider text-blue-400">Products 02</p>
    <h3 className="text-2xl font-bold mt-2 mb-3">
     Enterprise Cloud Supply Chain →
    </h3>
    <p className="text-gray-500">
    A robust, vertically scalable, and customizable suite of supply chain automation tools for high-throughput industrial applications.
    </p>
  </div>

  {/* Image Section */}
  <div className="flex-shrink-0">
    <img
      src="/cloud-supply.png"
      alt="Decorative"
      className="h-40 w-auto object-contain"
    />
  </div>
</div>
       </div>
      </div>
    </div>
  );
};

export default OurProducts;
