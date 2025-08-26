import React from 'react';
import { Facebook, Linkedin, Instagram, Mail, Phone, MailCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Company Logo and Locations */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-wider mb-5 uppercase">Commeriva</h2>
            </div>

            {/* Subscription Part */}
            <div className='w-sm'>
             <h3 className='font-semibold text-xl mb-2 text-gray-700'>Get our email for info on new items.</h3>
             
              <div className="flex-1">
                
                <div className="flex md:gap-3 gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-3 text-sm border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 md:w-full w-fit"
                  />
                  <button className="bg-slate-800 text-gray-100 border border-gray-300 md:px-4 px-2 py-2 hover:bg-gray-900 cursor-pointer text-sm md:text-base transition">
                    Subscribe
                  </button>
                </div>

                <p className='font-semibold text-xs mt-2 text-gray-800'>By subscribing you agree to our Tearms & Condition and Privacy</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">COMPANY</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Videos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Return and Refund Policy</a></li>
            </ul>
          </div>

          {/* Solution Links */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">SOLUTION</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Roles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Industries</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Use Cases</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">CONTACT US</h3>
            <div className="mb-6 flex items-center gap-1 text-gray-600">
              <Phone size={17}></Phone>
              <p className="text-gray-600">+8801677182084</p>
            </div>
            <div className="mb-6 flex items-center gap-1 text-gray-600">
              <Mail size={16}></Mail>
              <p className="text-gray-600">commeriva@gmail.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"><Facebook size={16} className="text-gray-600" /></a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"><Linkedin size={16} className="text-gray-600" /></a>
                <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"><Instagram size={16} className="text-gray-600" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-800 text-sm font-semibold">Copyright 2025 © Commeriva Automation Inc.</p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-800 font-semibold hover:text-gray-900 transition-colors duration-200 text-sm hover:underline">Terms of Use</a>
              <a href="#" className="text-gray-800 hover:text-gray-900 transition-colors duration-200 text-sm font-semibold hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
