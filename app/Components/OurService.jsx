// ServicesPage.jsx
import { FaMobileAlt, FaLaptopCode, FaPaintBrush, FaShoppingCart, FaCloud, FaCogs } from 'react-icons/fa';
import ElectricBorder from './ElectricBorder';

const services = [
    {
    title: 'Custom Web Solution',
    icon: <FaCogs className="text-gray-800 text-5xl mb-2" />,
    description:
      'Your software, always improving. Our DevOps team ensures your software is reliable, high-quality, and evolves with your needs.',
  },
  {
    title: 'E-Commerce Website (Next.js)',
    icon: <FaPaintBrush className="text-gray-800 text-5xl mb-2" />,
    description:
      'We create digital experiences that people truly enjoy, focusing on intuitive and engaging designs that feel effortless to use. Every interaction is carefully crafted to be smooth, memorable, and meaningful, ensuring that users connect with your brand in a lasting way. From the very first click, we aim to spark curiosity, build trust, and inspire confidence. By blending creativity with usability, we transform ordinary visits into impactful journeys. This is how we turn first-time visitors into loyal, long-term customers.',
  },
  {
    title: 'Portfolio Websites',
    icon: <FaMobileAlt className="text-gray-800 text-5xl mb-2" />,
    description:
      'High-performance mobile apps for iOS and Android that accelerate your business growth and delight your users.',
  },
  {
    title: 'Landing Pages',
    icon: <FaLaptopCode className="text-gray-800 text-5xl mb-2" />,
    description:
      'Custom-built software solutions that streamline your operations, solve unique challenges, and fuel your growth.',
  },
  {
    title: 'Funnel Websites',
    icon: <FaShoppingCart className="text-gray-800 text-5xl mb-2" />,
    description:
      'Turn your online store into a true sales powerhouse with our expertly crafted eCommerce solutions. We design and build platforms that not only showcase your products beautifully but also create seamless, intuitive shopping experiences for your customers. Every element is optimized to engage visitors, build trust, and drive conversions. By blending performance with design, we ensure your store stands out in a crowded market. With us, your brand doesn’t just sell — it grows.',
  },
  {
    title: 'Corporate & Company Websites',
    icon: <FaCloud className="text-gray-800 text-5xl mb-2" />,
    description:
      'Scalable SaaS solutions that streamline your business, expand your reach, and boost customer satisfaction.',
  },
  
];

export default function OurServices() {
  return (
    <div id='service' className="min-h-screen montserrat bg-white pt-8 px-4 sm:px-6 lg:px-8 mb-4 lg:mb-0">

        <h1 className='lg:text-4xl text-3xl font-semibold text-center pb-10'>Our Services</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
  {services.map((service, index) => (
    <div
      key={index}
      className={`rounded-2xl border border-gray-400 p-6 transition-all duration-300
        ${index === 1 ? "md:col-span-2 min-h-[320px]" : ""}
        ${index === 4 ? "md:col-span-2" : ""}`}
    >
      <div>{service.icon}</div>
      <h3 className="text-2xl font-semibold text-gray-900 mt-5 mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  ))}
</div>

    </div>
  );
}
