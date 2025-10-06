
import Globe from "./Globe";
import { ChartLine } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Code } from "lucide-react";

const features = [
  {
    icon: <Code size={60}></Code>,
    title: "Next.js Powered Websites",
    description:
      "Faster, secure, and SEO-friendly platforms designed to perform.",
  },
  {
    icon: <Lightbulb size={60}></Lightbulb>,
    title: "Tailored Business Solutions",
    description:
      "From corporate sites to e-commerce, we build what your business needs.",
  },
  {
    icon: <ChartLine size={60}></ChartLine>,
    title: "Scalable & Future-Ready",
    description:
      "Grow without limits with flexible, enterprise-grade technology.",
  },
];

export default function SupplyChain() {


  return (
    <div className="md:w-10/12 w-11/12 mx-auto bg-white md:mt-24 mt-16">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl title font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Boost Your Efficiency with Commeriva
        </h2>
        <p className="mt-4 md:text-lg poppins text-gray-600">
          Comprehensive android app for distribution management: orders, SKU
          scanning, tracking, metrics, and vehicle monitoring in one solution
        </p>
      </div>
      <div className="flex mt-10 justify-between md:flex-row-reverse items-center flex-col-reverse">
        {/* Left Side - Content */}
        <div className="">
          <div className="max-w-xl w-full">
            {features.map((feature, index) => (
              <div
                key={index}
                
                className="group md:p-6 p-4 border-b last:border-b-0"
              >
                <div className="md:flex md:items-center justify-start space-x-6">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <div
                      
                      className="rounded-full flex items-center md:justify-center transition-shadow duration-300 primary-text-color"
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3
                      
                      className="text-xl md:text-2xl font-semibold text-gray-900 my-2 text-start transition-colors duration-300 poppins"
                    >
                      {feature.title}
                    </h3>
                    <p
                      
                      className="text-gray-600 leading-relaxed text-base mb-3 text-start max-w-lg"
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Sticky Image */}
        <div className="md:w-1/2 md:sticky top-0">
          <div className="md:flex items-center justify-center md:overflow-hidden">
            {/* Background Pattern */}
            <div>
              <Globe></Globe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
