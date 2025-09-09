import Image from "next/image";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center md:w-10/12 mx-auto md:my-10 md:mt-10 mt-5">
  
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="w-full flex items-center"
      >
        <div className="flex md:gap-10 items-center gap-2">
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406043.png" alt="Bodda" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406113.png" alt="Satsuna" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406134.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406184.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406207.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406225.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406243.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406266.png" alt="Brothers" width={500} height={500} />
          <Image unoptimized className="w-40 md:w-60" src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757406290.png" alt="Brothers" width={500} height={500} />
           
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedBy;
