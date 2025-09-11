"use client";
import {
  ArrowRight,
  Zap,
  Layers,
  Database,
  Shield,
  Rocket,
  Code,
  Server,
  Smartphone,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import Globe from "../Components/Globe";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { TbTruckDelivery, TbWorld } from "react-icons/tb";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Link from "next/link";
export default function WhyNextJS() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description:
        "Automatic code splitting, image optimization, and performance enhancements out of the box for blazing fast load times.",
      highlight: "Up to 10x faster",
    },
    {
      icon: <TbWorld className="w-8 h-8" />,
      title: "Dynamic HTML Streaming",
      description:
        "Stream HTML as it's generated for faster perceived performance and superior user experience.",
      highlight: "Real-time rendering",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "React Server Components",
      description:
        "Render components on the server to dramatically reduce bundle size and improve performance.",
      highlight: "Smaller bundles",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Advanced Data Fetching",
      description:
        "Flexible data fetching with built-in caching, revalidation, and comprehensive error handling.",
      highlight: "Smart caching",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Universal CSS Support",
      description:
        "Built-in support for CSS Modules, Sass, CSS-in-JS, Tailwind, and all popular styling solutions.",
      highlight: "Any CSS framework",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Flexible Rendering",
      description:
        "Choose between static generation, server-side rendering, or client-side rendering per page.",
      highlight: "Your choice",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Capabilities",
      description:
        "Build complete applications with API routes using Web Standard Request and Response APIs.",
      highlight: "Frontend + Backend",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Powerful Middleware",
      description:
        "Run code before requests complete to modify responses, redirect, rewrite URLs, and more.",
      highlight: "Request control",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Advanced Routing System",
      description:
        "File-system based routing with nested layouts, loading states, error boundaries, and parallel routes.",
      highlight: "Intuitive structure",
    },
  ];

  const features2 = [
    {
      icon: <Code size={60}></Code>,
      title: "Web Order Management",
      description:
        "Simplify order management with Web Order Monitoring. Track sales orders and KPIs effortlessly.",
    },
    {
      icon: <MdOutlineDocumentScanner size={60}></MdOutlineDocumentScanner>,
      title: "Scan & Trace Technology",
      description:
        "Elevate your warehouse experience with Scan & Trace Technology. Enjoy superior inventory control.",
    },
    {
      icon: <TbTruckDelivery size={60}></TbTruckDelivery>,
      title: "Delivery Management",
      description:
        "Elevate your delivery operations with Dispatch & Delivery Management and save your valuable time.",
    },
  ];

  const feature1Ref = useRef(null);
    const feature2Ref = useRef(null);
    const feature3Ref = useRef(null);
  
    const feature1InView = useInView(feature1Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
    const feature2InView = useInView(feature2Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
    const feature3InView = useInView(feature3Ref, {
      once: true,
      margin: "-100px 0px -100px 0px",
    });
  
    const featureRefs = [feature1Ref, feature2Ref, feature3Ref];
    const featureInView = [feature1InView, feature2InView, feature3InView];
  

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Developer Experience",
      points: [
        "Hot reloading",
        "TypeScript support",
        "Built-in ESLint",
        "Zero config setup",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Production Ready",
      points: [
        "Enterprise scale",
        "Security best practices",
        "Performance monitoring",
        "Edge deployment",
      ],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Standard",
      points: [
        "Used by Fortune 500",
        "Active community",
        "Regular updates",
        "Long-term support",
      ],
    },
  ];

  const companies = [
    { name: "Netflix", logo: "🎬", users: "230M+" },
    { name: "TikTok", logo: "🎵", users: "1B+" },
    { name: "Twitch", logo: "🎮", users: "140M+" },
    { name: "Spotify", logo: "🎧", users: "500M+" },
    { name: "OpenAI", logo: "🤖", users: "100M+" },
    { name: "Vercel", logo: "▲", users: "1M+" },
  ];

  const stats = [
    {
      number: "10x",
      label: "Faster builds with Turbopack",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      number: "700ms",
      label: "Faster local server startup",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      number: "4x",
      label: "Faster code updates",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Active developers",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center h-[90vh] flex flex-col justify-center items-center mb-10">
          <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 mb-8">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">
              The React Framework for Production
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium heroTitle text-gray-700 mb-8">
            Why Choose{" "}
            <span className="relative font-semibold text-gray-900">
              Next.js
              <div className="absolute -bottom-4 left-0 right-0 h-1 border-b-4 border-dashed border-gray-300"></div>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            The React framework that gives you the best developer experience
            with all the features you need for production: hybrid static &
            server rendering, smart bundling, route pre-fetching, and more.
          </p>

          <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-center items-center">
            <Link href='/pricing' className="group relative overflow-hidden border-2 border-gray-300 text-teal-500 md:px-10 px-12 md:py-3 py-2 rounded-full hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg font-semibold cursor-pointer">
              <span className="absolute inset-0 bg-primary-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative md:text-base text-sm">Get Started</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="border-2 border-gray-300 text-teal-500 px-8 md:py-3 py-2 rounded-full hover:border-gray-200 transition-colors font-semibold cursor-pointer md:text-base text-sm">
              View Documentation
            </button>
          </div>
        </div>

         <div className="md:mb-20 mb-10">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl title font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
           Boost your supply chain efficiency
        </h2>
        <p className="mt-4 md:text-lg poppins text-gray-600">
         Comprehensive android app for distribution management: orders, SKU scanning, tracking, metrics, and vehicle monitoring in one solution
        </p>
      </div>
      <div className="flex mt-10 justify-between md:flex-row-reverse items-center flex-col-reverse">
        {/* Left Side - Scrollable Content */}
        <div className="overflow-y-auto">
          <div className="max-w-xl w-full">
             {features2.map((feature, index) => (
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

        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-11 title">
              Everything you need to build
              <br />
              <span className="text-gray-500">great products on the web</span>
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border-2 border-gray-100 hover:border-teal-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-400 border border-gray-200 rounded-full px-3 py-1">
                  {feature.highlight}
                </div>

                <div className="mb-6">
                  <div className="inline-flex p-3 border-2 border-gray-200 rounded-xl text-gray-700 group-hover:border-teal-600 group-hover:text-teal-600 transition-all">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-0 w-[97%] mx-auto left-0 right-0 h-[2px] bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-24">
          <h3 className="md:text-3xl text-2xl font-semibold text-gray-900 text-center mb-16 title">
            Why developers and companies choose{" "}
            <span className="text-gray-600">Next.js ?</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center poppins">
                <div className="flex flex-col items-center">
                  <div className="inline-flex p-4 border-2 border-gray-200 rounded-full mb-6">
                    {benefit.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">
                      {benefit.title}
                    </h4>
                    <ul className="space-y-3 text-left inline-block">
                      {benefit.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl title font-semibold text-gray-900 text-center mb-2">
            Trusted by teams at
          </h3>
          <p className="text-gray-600 text-center mb-12">
            Powering applications used by millions worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="group text-center p-6 border border-gray-200 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{company.logo}</div>
                <div className="font-bold text-gray-900 mb-1">
                  {company.name}
                </div>
                <div className="text-sm text-gray-500">
                  {company.users} users
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="md:text-4xl text-3xl font-semibold title text-gray-900 mb-6">
              Built on a foundation of fast,
              <br />
              production-grade tooling
            </h3>
            <div className="w-24 h-1 bg-gray-900 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 poppins">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 border-2 border-gray-200 rounded-2xl hover:border-gray-400 hover:shadow-lg transition-all group"
              >
                <div className="inline-flex p-3 border border-gray-300 rounded-full mb-4 group-hover:border-gray-500 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-semibold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center border-2 border-gray-200 rounded-3xl p-16 hover:border-gray-400 transition-colors">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 heroTitle">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto poppins">
            Join millions of developers building the future of the web with
            Next.js. Start your journey today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden border-2 border-gray-200 text-gray-600 px-12 py-5 rounded-full hover:text-white transition-colors duration-300 flex items-center gap-3 text-lg font-semibold">
              <span className="absolute inset-0 bg-primary-color transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              <span className="relative">Start Building Today</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-sm">Join 2M+ developers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
