"use client";

import { Typography } from "@material-tailwind/react";

export function PopularClients() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            ACHIEVEMENTS
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Hackathon Winner & Internship Recognition
          </Typography>
        </div>
        <div className="mx-auto mt-6 w-full lg:w-8/12 text-center">
          <Typography className="!text-gray-500">
            Winner of the PESU-CIDE Hackathon — awarded for innovation in
            cybercrime detection (earned a 2-month internship with Karnataka
            CID). Intern mentors and senior officers provided positive
            feedback for practical impact of the solutions.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default PopularClients;
