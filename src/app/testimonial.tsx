"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

export function Testimonial() {
  return (
    <section className="py-12 px-8 lg:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center animate-fade-in-up">
          <Typography variant="h2" className="mb-8 text-white">
            Testimonials
          </Typography>
          <div className="mx-auto w-full px-4 lg:w-8/12 bg-gray-800 p-8 rounded-lg border-l-4 border-red-600 shadow-xl">
            <Typography
              variant="lead"
              className="font-normal !text-gray-300 italic mb-6"
            >
              Anjali&apos;s Deepfake Detector and related security tooling showed
              strong practical results during her internship at CID Karnataka. Senior
              officials (DSP and IPS) praised the innovation, utility, and
              potential to assist digital investigations.
            </Typography>
            <Typography className="mt-4 text-red-500 font-semibold">
              — DSP &amp; IPS Officers, Criminal Investigation Department, Karnataka
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
