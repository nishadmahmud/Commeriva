import Image from "next/image";
import Link from "next/link";
import React from "react";

const IntegrationsPage = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        {/* <div className="text-center h-[75vh] flex md:flex-row flex-col gap-20 md:gap-0 md:justify-between  items-center md:mb-16 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl md:text-start font-semibold heroTitle text-gray-900 mb-4 text-center">
            Powerful <span className="text-teal-600">Integrations</span>
          </h1>
          <p className="md:text-lg text-sm poppins text-gray-600 max-w-2xl md:text-start leading-relaxed">
            Connect your favorite e-commerce platforms and courier services to
            streamline your operations with seamless automation.
          </p>
          </div>
          <div>

            <Image src="https://www.outletexpense.xyz/uploads/168-Khan-Sahadat/1757703023.png" alt="integration" width={1000} height={1000} className="w-56 md:w-96 h-56 md:h-96"></Image>
        
          </div>
        </div> */}

        {/* Payment Gateway Integrations */}
        <section id="payment" className="mb-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl title font-semibold text-gray-900 mb-2">
              Payment Gateway Integrations
            </h2>
            <p className="text-gray-600 poppins">
              Secure and reliable payment processing with leading payment
              gateways
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 poppins">
            {/* PayPal */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="paypal"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408583.png"
                  ></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                PayPal
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Global payment solution with buyer protection and seamless
                checkout.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• One-click Payments</li>
                  <li>• Buyer Protection</li>
                  <li>• Multi-currency Support</li>
                </ul>
              </div>
            </div>

            {/* Stripe */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="stripe"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408506.png"
                  ></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Stripe
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Advanced payment infrastructure for businesses of all sizes.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Advanced APIs</li>
                  <li>• Fraud Detection</li>
                  <li>• Subscription Billing</li>
                </ul>
              </div>
            </div>

            {/* SSL Commerz */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="ssl"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408529.png"
                  ></Image>
                </div>
                <span className="bg-green-100 text-green-500 px-3 py-1 rounded-full text-xs poppins font-medium">
                  Available
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                SSL Commerz
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Leading payment gateway in Bangladesh with local banking
                support.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Local Bank Cards</li>
                  <li>• Mobile Banking</li>
                  <li>• Instant Settlement</li>
                </ul>
              </div>
            </div>

            {/* Razorpay */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="stripe"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408554.png"
                  ></Image>
                </div>

                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full poppins font-medium text-xs">
                  Coming Soon
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Razorpay
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Complete payment solution with smart routing and analytics.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Key Features:
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart Routing</li>
                  <li>• Payment Analytics</li>
                  <li>• Auto Reconciliation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Courier Service Integrations */}
        <section id="courier" className="my-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold title text-gray-900 mb-2">
              Courier Service Integrations
            </h2>
            <p className="text-gray-600 poppins">
              Ship with Bangladesh's top courier companies for reliable
              nationwide delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pathao */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="pathao"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408642.png"
                  ></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pathao
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast and reliable delivery across Bangladesh with real-time
                tracking.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-day Delivery</li>
                  <li>• Cash on Delivery</li>
                  <li>• Live Tracking</li>
                </ul>
              </div>
            </div>

            {/* dhl */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="dhl"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408610.png"
                  ></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">DHL</h3>
              <p className="text-gray-600 text-sm mb-4">
                Technology-driven courier service with advanced tracking
                capabilities.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Smart Routing</li>
                  <li>• Digital Receipts</li>
                  <li>• Customer Portal</li>
                </ul>
              </div>
            </div>

            {/* fedex */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="fedex"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408675.png"
                  ></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">FedEx</h3>
              <p className="text-gray-600 text-sm mb-4">
                Comprehensive logistics solutions with nationwide coverage.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Warehouse Solutions</li>
                  <li>• Custom Delivery</li>
                  <li>• Nationwide Network</li>
                </ul>
              </div>
            </div>

            {/* steadfast */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image
                    width={100}
                    height={100}
                    alt="pathao"
                    src="https://www.outletexpense.xyz/uploads/230-Motiur-Rahman/1757408952.png"
                  ></Image>
                </div>
                <div className="text-right">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium block mb-1">
                    Available
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Steadfast
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Fast and reliable delivery across Bangladesh with real-time
                tracking.
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Services:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Same-day Delivery</li>
                  <li>• Cash on Delivery</li>
                  <li>• Live Tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl title font-semibold text-gray-900 mb-2">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 mb-8 poppins">
            Connect your platforms and grow your online store today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link target="_blank" href="https://wa.me/+8801677182084">
            
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-sm poppins font-medium text-sm cursor-pointer transition-colors duration-200">
              Sign Up Today
            </button>
            </Link>

            <Link target="_blank" href='https://docs.google.com/forms/d/e/1FAIpQLSebEE9Lz4XluDQ9oLs6dS6CH1NNEBQcEmVQ4ncpg9i3uyuy1w/viewform'>
            
            <button className="border border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-2 rounded-sm poppins font-medium text-sm cursor-pointer transition-colors duration-200">
              View Documentation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
