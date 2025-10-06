import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MailCheck,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-neutral-950 dark:to-black border-t border-gray-200 dark:border-white/10 md:pt-16 pt-10 pb-10 px-4 sm:px-6 lg:px-8">
      {/* soft glow */}
      <div className="pointer-events-none absolute -top-10 left-0 right-0 h-10 bg-gradient-to-b from-white dark:from-neutral-950 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Logo and Locations */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-3xl font-semibold tracking-wide text-gray-900 dark:text-gray-100 mb-2 logoFont">
                Commeriva
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300/80 max-w-md">
                Smart, secure and scalable web solutions for modern businesses.
              </p>
            </div>

            {/* Subscription Part */}
            <div className="w-sm">
              <h3 className="font-medium inline md:text-xl text-lg mb-2 text-gray-800 dark:text-gray-100 poppins">
                Stay in the loop
              </h3>

              <div>
                <div className="flex md:gap-3 gap-2 poppins">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="md:flex-1 px-4 py-3 text-sm rounded-full border border-gray-300 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-400/60 md:w-full w-[60vw] bg-white/90 dark:bg-neutral-900 dark:text-gray-100"
                  />
                  <button className="bg-gray-900 dark:bg-white rounded-full text-white dark:text-black md:px-5 px-4 py-2.5 hover:bg-gray-800 dark:hover:bg-gray-100 cursor-pointer text-sm md:text-base transition shadow-sm">
                    Subscribe
                  </button>
                </div>

                <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                  By subscribing you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm tracking-wide">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="privacy-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Solution Links */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm tracking-wide">PRODUCTS</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="why-nextjs"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  E‑commerce Website
                </Link>
              </li>
              <li>
                <Link
                  href="corporate-website"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Corporate Website
                </Link>
              </li>
              <li>
                <Link
                  href="portfolio-website"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Portfolio Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="poppins">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4 text-sm tracking-wide">CONTACT</h3>
            <div className="mb-4 flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Phone size={16} />
              <p className="">+8801886182084</p>
            </div>
            <div className="mb-6 flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <Mail size={16} />
              <p className="">info@commeriva.com</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">Follow us</h4>
              <div className="flex space-x-3">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61579322220482"
                  className="w-9 h-9 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 transition-colors duration-200 shadow-sm"
                >
                  <Facebook size={16} className="text-gray-600 dark:text-gray-300" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/commeriva"
                  target="_blank"
                  className="w-9 h-9 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 transition-colors duration-200 shadow-sm"
                >
                  <Linkedin size={16} className="text-gray-600 dark:text-gray-300" />
                </Link>
                <a
                  href="#"
                  className="w-9 h-9 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 transition-colors duration-200 shadow-sm"
                >
                  <Instagram size={16} className="text-gray-600 dark:text-gray-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-700 dark:text-gray-300 text-sm poppins">
              © 2025 Commeriva Automation Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-300 poppins">
              <Link href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4">Privacy</Link>
              <span>•</span>
              <Link href="/about-us" className="hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4">About</Link>
              <span>•</span>
              <Link href="/contact-us" className="hover:text-gray-900 dark:hover:text-white hover:underline underline-offset-4">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
