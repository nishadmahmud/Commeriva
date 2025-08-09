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




const TrustedBy = () => {
    return (
        <div className='lg:my-20 mb-5 mt-6 flex flex-col items-center md:justify-center md:justify-items-center w-10/12 mx-auto'>
            <h1 className='font-bold text-sm mb-2 md:mb-4'>TRUSTED BY LEADING ORGANIZATIONS</h1>
            <Marquee gradient speed={30}>
        <Image className='w-12 lg:w-20 ml-16' alt='spronser_logo' src={company01}></Image>
        <Image className='w-16 lg:w-24 ml-16' alt='spronser_logo' src={mobileClub}></Image>
        <Image className='w-16 lg:w-24 ml-16' alt='spronser_logo' src={company04}></Image>

        <Image className='w-16 lg:w-24 ml-16' alt='spronser_logo' src={company05}></Image>
        <Image className='w-12 lg:w-20 ml-16' alt='spronser_logo' src={bhaiBhaiS}></Image>
        <Image className='w-12 ml-16' alt='spronser_logo' src={dontaion}></Image>
        <Image className='w-16 lg:w-28 ml-16' alt='spronser_logo' src={bonzer}></Image>
        <Image className='w-16 ml-16' alt='spronser_logo' src={apPharma}></Image>
        <Image className='w-12 lg:w-20 ml-16' alt='spronser_logo' src={corporateCare}></Image>
        <Image className='w-14 lg:w-20 ml-16' alt='spronser_logo' src={company01}></Image>
        <Image className='w-16 lg:w-24 ml-16' alt='spronser_logo' src={mobileClub}></Image>
        <Image className='w-10 lg:w-16 ml-16' alt='spronser_logo' src={perfectG}></Image>

            </Marquee>
        </div>
    );
};

export default TrustedBy;