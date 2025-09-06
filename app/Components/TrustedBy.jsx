import Image from "next/image";
import company01 from '../../public/Gadget Bodda (1).png'
import company02 from '../../public/Gadget Bodda (2).png'
import company03 from '../../public/Gadget Bodda (3).png'
import company04 from '../../public/Gadget Bodda (4).png'
import company05 from '../../public/Gadget Bodda (5).png'
import company06 from '../../public/Gadget Bodda (6).png'
import company07 from '../../public/Gadget Bodda (7).png'
import company08 from '../../public/Gadget Bodda (8).png'
import company09 from '../../public/Gadget Bodda.png'

import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center md:w-10/12 mx-auto my-10">
      {/* <h1 className='font-medium montserrat text-sm mb-2 md:mb-4'>TRUSTED BY LEADING ORGANIZATIONS</h1> */}

      <Marquee
        gradient={true}
        speed={50}
        pauseOnHover={true}
        className="w-full flex items-center"
      >
        <div className="flex gap-10 items-center">
          <Image unoptimized src={company01} alt="Bodda" width={250} height={250} />
          <Image unoptimized src={company02} alt="Satsuna" width={250} height={250} />
          <Image unoptimized src={company03} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company04} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company05} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company06} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company07} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company08} alt="Brothers" width={250} height={250} />
          <Image unoptimized src={company09} alt="Brothers" width={250} height={250} />
        

          {/* <Image unoptimized src={perfectG} alt="Perfect Gadget BD" width={100} height={50} /> */}
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedBy;
