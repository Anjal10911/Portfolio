"use client";

import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export function Clients() {
  return (
    <section className="px-8 py-12 md:py-20 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto text-center"
      >
        <Typography variant="h6" className="mb-4 text-red-500 font-semibold uppercase tracking-wider">
          Projects & Collaborations
        </Typography>
        <Typography className="mx-auto w-full lg:w-6/12 !text-gray-300 text-lg leading-relaxed">
          {"My work is grounded in research and practical security application. "}
          {"From AI driven vulnerability scanners to secure healthcare platforms, I collaborate on projects that demand reliability and innovation. "}
          {"If you're looking for a partner in building secure systems, let's connect."}
        </Typography>
      </motion.div>
    </section>
  );
}

export default Clients;
