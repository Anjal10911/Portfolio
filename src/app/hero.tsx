"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion } from "framer-motion";
import { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleConnect = async () => {
    if (!email) return alert("Please enter your email.");
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/meeodgbb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: "New connection request from Hero section" }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        alert("Thanks for connecting! I'll reach out shortly.");
      } else {
        setStatus("error");
        alert("Failed to connect. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      alert("Error connecting.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <header className="gradient-bg p-8 min-h-screen flex items-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/image/grid.svg')] opacity-10"></div>
      <div className="container mx-auto grid h-full gap-10 w-full grid-cols-1 items-center lg:grid-cols-2 relative z-10">
        <div className="row-start-2 lg:row-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Typography
              variant="h1"
              color="white"
              className="mb-4 lg:text-7xl !leading-tight text-3xl md:text-5xl font-bold tracking-tight"
            >
              Security Focused <span className="text-red-500 drop-shadow-md">Software Engineer</span>
            </Typography>
            <Typography
              variant="lead"
              className="mb-6 !text-gray-300 md:pr-16 xl:pr-28 text-base md:text-lg leading-relaxed"
            >
              I’m Anjali Kumari, a Computer Science and Engineering student specializing in Cyber Security. I engineer secure full stack applications, design robust backend systems, and build reliable software solutions with real world applicability.
            </Typography>
          </motion.div>
          <div className="grid animate-fade-in-up animate-delay-300">
            <Typography variant="small" className="mb-2 text-gray-300 font-medium uppercase tracking-wider text-xs md:text-sm">
              Currently open to Software Engineering & Security Internships.
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input
                className="text-white placeholder:text-gray-500 focus:!border-red-500"
                color="white"
                label="Enter your email"
                size="lg"
                crossOrigin={undefined}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Button
                className="w-full px-4 md:w-[12rem] bg-red-600 hover:bg-red-700 glow-red transition-all duration-300 rounded-lg font-bold"
                onClick={handleConnect}
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Connecting..." : "Connect with me"}
              </Button>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-purple-800 rounded-full opacity-30 blur-2xl"></div>
            <Image
              width={1024}
              height={1024}
              alt="Anjali Kumari profile"
              src={`${getImagePrefix()}image/profile-hero.jpg`}
              className="h-64 w-64 md:h-[28rem] md:w-[28rem] lg:h-[34rem] lg:w-[34rem] rounded-full object-cover border-4 border-red-500/50 glow-red shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Hero;
