"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    details: "",
    captcha: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="text-center py-16 px-6 bg-gradient-to-r from-gray-100 to-teal-100">
        <p className="text-teal-600 font-semibold poppins">Contact</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 heroTitle">
          Get In Touch With Our Commeriva Sales Team
        </h1>
        <p className="text-gray-600 max-w-2xl poppins mx-auto">
          Commeriva offers a complete business automation fulfillment system,
          designed for businesses like yours — so you can manage your inventory easily and efficiently.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-20 mt-10">
        {/* Left Side */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 title my-4 mt-6">
            Contact Sales Team About Commeriva
          </h2>
          <p className="text-gray-600 mb-8 poppins">
            Transform Your Sales Game! Curious about how Commeriva can elevate
            your team’s performance? Our sales gurus are eager to show you the
            magic! Reach out to us by filling in the form on the right, and one
            of our experts will get in touch with you shortly.
          </p>

          <div className="mb-6 poppins flex items-start gap-3">
            <FaMapMarkerAlt className="text-teal-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Dhaka Office</h3>
              <p className="text-gray-600 text-sm">
               Aftabnagar, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaEnvelope className="text-teal-600 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800">Email Address</h3>
              <p className="text-gray-600 text-sm">info@commeriva.com</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl title font-semibold text-gray-800 mb-6 flex items-center gap-2">
            <AiOutlineMessage></AiOutlineMessage>
            Send Us A Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 poppins">
              <input
                type="text"
                name="name"
                placeholder="Write your name"
                value={form.name}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <input
                type="text"
                name="phone"
                placeholder="Write your phone number"
                value={form.phone}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Write your email address"
                value={form.email}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <input
                type="text"
                name="subject"
                placeholder="Write the subject of your message"
                value={form.subject}
                onChange={handleChange}
                className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <textarea
              name="details"
              placeholder="Write your message in details"
              value={form.details}
              onChange={handleChange}
              rows={4}
              className="border rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
            />


            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition poppins cursor-pointer flex items-center gap-2 justify-center"
            >
              Send Message 
              <IoMdSend />

            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



