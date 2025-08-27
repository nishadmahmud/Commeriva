import React from "react";
import { Play } from "lucide-react";
import RotatingText from "./RotatingText";
import Threads from "./Threads";
import Silk from "./Silk";
import Navbar from "./Navbar"; // ✅ import your navbar
import DotGrid from "./DotGrid";
import { Ripple } from "@/components/magicui/ripple";
import { HeroGeometric } from "@/components/ui/shadcn-io/shape-landing-hero";

const HeroPage = () => {
  return (
    <div className="relative w-full md:min-h-[100vh] flex flex-col text-center overflow-hidden">

      {/* Background Layer covers everything */}
      <div className="absolute inset-0 z-0 top-20">
        {/* <DotGrid
    dotSize={5}
    gap={12}
    baseColor="#B8B8B8"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  /> */}
 
      </div>

      {/* Navbar on top of Silk */}
      

      {/* Hero Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
        <h1 className="text-5xl md:text-6xl font-bold leading-14 text-black max-w-4xl montserrat">
          More than authentication, <br />
          Complete User{" "}
          <RotatingText
            texts={["Control", "Access", "Security", "Experience"]}
            mainClassName="text-black absolute top-1 overflow-hidden justify-center inline-block"
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

        <p className="mt-6 text-lg max-w-3xl text-gray-600">
          Need more than sign-in? Clerk gives you full stack auth and user
          management — so you can launch faster, scale easier, and stay
          focused on building your business.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
          <button className="bg-black hover:bg-gray-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition cursor-pointer">
            Start building for free
          </button>
          <button className="flex items-center gap-2 text-gray-800 hover:text-black font-medium transition cursor-pointer border border-gray-200 px-6 py-3 rounded-lg bg-transparent inset-0 backdrop-blur-sm">
            <Play color="black" size={25} className="bg-gray-200 rounded-full p-2" />
            Watch demo <span className="text-gray-500 text-sm">2 min</span>
          </button>
        </div>
      </div> */}
        <HeroGeometric 
        badge="Commeriva"
        title1="Smart, Secure & Scalable"
        // title2="Digital Experience"
        description="Build exceptional products that users love with our comprehensive component library and design system."
      />
    </div>
  );
};


export default HeroPage;
