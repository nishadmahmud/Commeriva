'use client'

import { useState } from "react";

const categories = [
  "B2B SaaS",
  "Retail",
  "Financial Services",
  "Publishing",
  "Travel",
  "Healthcare",
];

export default function Category() {
  const [active, setActive] = useState("Travel");

  return (
    <div className="bg-white text-gray-900 flex flex-col items-start justify-start my-20 w-11/12 mx-auto">
      <h1 className="md:text-6xl font-semibold text-start mb-4 leading-16">
        Identity is so much more than <br /> just the login box
      </h1>
      <p className="text-2xl text-start text-gray-700 mt-1 mb-8">
        Let’s take a look at everything you can do.
      </p>

      <div className="flex flex-wrap gap-4 mb-8 justify-start">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-2 rounded-full border transition-all duration-200 text-base font-medium
              ${
                active === cat
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-900 border-gray-300 hover:border-gray-500"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-start text-gray-500 max-w-2xl">
        Cater for convenience and privacy. Incorporate social logins, facilitate
        SSO and loyalty program extensions, and federate with industry partner
        IAM systems.
      </p>
    </div>
  );
}
