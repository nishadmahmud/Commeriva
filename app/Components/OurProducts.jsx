import Image from "next/image";
import React from "react";
import CardSwap, { Card } from "./CardSwap";
import { ArrowRight } from "lucide-react";

const OurProducts = () => {
  return (
    <div className="w-10/12 mx-auto mt-10">
      {/* Title Centered */}
      

      {/* CardSwap Centered */}
      <div className="relative flex justify-between items-center h-screen">

       <div className="mb-20 space-y-2">
         <h3 className="font-semibold text-4xl leading-10 text-gray-900 text-start">Innovative Solutions For <br /> Your Business Needs</h3>

        <p className="text-gray-600 italic font-medium">Smart. Scalable. Efficient.</p>
       </div>


        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          {/* card 01 */}
          <Card>
            <div className="flex items-center gap-2 px-3 py-2 pt-3 bg-gray-100 border-b border-gray-300 rounded-t-xl">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="p-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Info Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900">
              E-Commerce Suite→
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Empower your online business with an all-in-one solution designed to drive growth and success. From managing operations to optimizing performance, our platform gives you the tools to thrive in a competitive digital marketplace.
            </p>
            <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/e-commarce.gif"
              alt="E-Commerce Suite"
              className="w-52"
            />
          </div>
        </div>
          </Card>

          {/* card 02 */}
          <Card>
            <div className="flex items-center gap-2 px-3 py-2 pt-3 bg-gray-100 border-b border-gray-300 rounded-t-xl">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="p-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Info Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900">
              Enterprise Cloud Supply Chain→
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              A robust, vertically scalable, and customizable suite of supply chain automation tools for high-throughput industrial applications.A powerful, scalable, and customizable supply chain automation suite for industrial efficiency.
            </p>
            <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/cloud-data-processing.png"
              alt="E-Commerce Suite"
              className="w-52"
            />
          </div>
        </div>
          </Card>

          {/* card 03 */}
          <Card>
            <div className="flex items-center gap-2 px-3 py-2 pt-3 bg-gray-100 border-b border-gray-300 rounded-t-xl">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="p-6 flex flex-col sm:flex-row items-center gap-4">
          {/* Info Section */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-900">
              Intelligent Inventory Manager→
            </h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              The Intelligent Inventory Manager helps businesses optimize their stock levels with real-time insights, ensuring products are always available when needed. By automating replenishment and monitoring inventory trends.
            </p>
            <button className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src="/pos.gif"
              alt="E-Commerce Suite"
              className="w-56"
            />
          </div>
        </div>
          </Card>
          
        </CardSwap>
      </div>
    </div>
  );
};

export default OurProducts;
