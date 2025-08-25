import Image from "next/image";
import company01 from '../../public/bodda.png'
import company04 from '../../public/satsuna.png'
import company05 from '../../public/brothers.png'
import bhaiBhaiS from '../../public/bhai-bhai.png'
import dontaion from '../../public/dontaion.png'
import bonzer from '../../public/bonzer.png'
import apPharma from '../../public/apPharma.png'
import corporateCare from '../../public/corporate-care.png'
import mobileClub from '../../public/mobileClub.png'
import perfectG from '../../public/PerfectGadgetBD-logo.png'
import Marquee from "react-fast-marquee";
import RotatingText from "./RotatingText";




const TrustedBy = () => {
    return (
        <div className='lg:my-20 mb-5 mt-6 flex flex-col items-center md:justify-center md:justify-items-center w-10/12 mx-auto'>
            <h1 className='font-medium montserrat text-sm mb-2 md:mb-4'>TRUSTED BY LEADING ORGANIZATIONS</h1>

            <div className="grid grid-cols-3 md:grid-cols-6 justify-around gap-10 poppins text-gray-600">
 <RotatingText
              texts={['Gadget Bodaa', 'Gadget Bodaa']}
              mainClassName="overflow-hidden justify-center mt-3 poppins text-gray-600"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl  font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             <RotatingText
              texts={['Apple Newton', 'Apple Newton']}
              mainClassName="overflow-hidden justify-center mt-3 "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             <RotatingText
              texts={['Mobile Club', 'Mobile Club']}
              mainClassName="overflow-hidden justify-center mt-3 "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             <RotatingText
              texts={['CeL-TeL', 'CeL-TeL']}
              mainClassName="overflow-hidden justify-center mt-3 "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             
             <RotatingText
              texts={['Apple Mart', 'Apple Mart']}
              mainClassName="overflow-hidden justify-center mt-3 "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             
             <RotatingText
              texts={['Elite', 'Elite']}
              mainClassName="overflow-hidden justify-center mt-3 "
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-xl font-semibold poppins text-gray-600"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
             
            </div>
        </div>
    );
};

export default TrustedBy;