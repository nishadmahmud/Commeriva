import React from "react";
import { Calendar, Play } from "lucide-react";
import RotatingText from "./RotatingText";
import PixelBlast from "./PixelBlast";
import TrustedBy from "./TrustedBy";
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="relative md:h-screen w-full overflow-hidden">


      {/* PixelBlast Background */}

      <div className="absolute hidden inset-0 -z-10 -right-52 bottom-20">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#B19EEF"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center text-center justify-center justify-items-center md:min-h-[60vh] px-6 md:mt-10 mt-20">
        <div className="mt-10">
          <h1 className="text-3xl md:text-5xl font-semibold md:leading-14 text-gray-900 max-w-3xl heroTitle">
            <span>Smart, Secure, & Scalable Websites for Your </span>
            {" "}
            <RotatingText
              texts={["E-commerce", "Branding", "Sales", "Portfolio", "Business"]}
              mainClassName="text-gray-700 absolute overflow-hidden justify-start top-2 md:top-3 inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%"}}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </h1>

          <p className="mt-6 md:text-lg text-center max-w-2xl text-gray-600 poppins md:line-clamp-3 line-clamp-3">
            Need more than sign-in? Clerk gives you full stack auth and user
            management — so you can launch faster, scale easier, and stay
            focused on building your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform?usp=sharing&ouid=101793279606112585174'>
            
            <button className="bg-gray-900 hover:bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer poppins flex items-center gap-1">
             <Calendar size={20}></Calendar> Book a appointment
            </button>
            </Link>

            <Link target="_blank" href='https://wa.me/+8801886182084'>
            
            <button className="flex items-center gap-2 text-gray-800 hover:text-black font-medium transition cursor-pointer border border-gray-300 px-6 py-3 rounded-lg bg-transparent inset-0 backdrop-blur-sm poppins">
              <Play
                color="black"
                size={25}
                className="bg-gray-200 rounded-full p-2"
              />
              Watch demo <span className="text-gray-500 text-sm">2 min</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
            <TrustedBy></TrustedBy>
      
    </div>
  );
};

export default HeroPage;
