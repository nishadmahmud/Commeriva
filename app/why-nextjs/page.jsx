import React from 'react';
import { ArrowRight, Zap, Globe, Layers, Database, Shield, Rocket, Code, Server, Smartphone } from 'lucide-react';

export default function WhyNextJS() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Built-in Optimizations",
      description: "Automatic code splitting, image optimization, and performance enhancements out of the box for faster load times."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Dynamic HTML Streaming",
      description: "Stream HTML as it's generated for faster perceived performance and better user experience."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "React Server Components",
      description: "Render components on the server to reduce bundle size and improve performance."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Fetching",
      description: "Flexible data fetching with built-in caching, revalidation, and error handling capabilities."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "CSS Support",
      description: "Built-in support for CSS Modules, Sass, CSS-in-JS, and popular styling solutions."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Client and Server Rendering",
      description: "Choose between static generation, server-side rendering, or client-side rendering per page."
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Route Handlers",
      description: "Build API endpoints with Web Standard Request and Response APIs for full-stack applications."
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Middleware",
      description: "Run code before requests are completed to modify responses, redirect, or rewrite URLs."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Advanced Routing & Nested Layouts",
      description: "File-system based routing with support for nested layouts, loading states, and error boundaries."
    }
  ];

  const companies = [
    { name: "Netflix", logo: "🎬" },
    { name: "TikTok", logo: "🎵" },
    { name: "Twitch", logo: "🎮" },
    { name: "Spotify", logo: "🎧" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Vercel", logo: "▲" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 poppins">
            Why Choose <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Next.js?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The React framework that gives you the best developer experience with all the features you need for production: 
            hybrid static & server rendering, smart bundling, route pre-fetching, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors">
              View Documentation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything you need to build great products on the web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50/30"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-200 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-medium text-gray-500 mb-8">Trusted by teams at</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Built on a foundation of fast, production-grade tooling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600">Faster builds with Turbopack</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-teal-400 mb-2">700ms</div>
              <div className="text-gray-600">Faster local server startup</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">4x</div>
              <div className="text-gray-600">Faster code updates with Fast Refresh</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Join millions of developers building with Next.js
          </p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Start Building Today
          </button>
        </div>
      </div>
    </div>
  );
}