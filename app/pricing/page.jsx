"use client";

import { Suspense } from "react";
import Pricing from "./PricingPage";

export default function PricingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Pricing />
    </Suspense>
  );
}
