"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    img: `${getImagePrefix()}image/projects/bug-bounty.png`,
    title: "Bug Bounty AI",
    desc: "An intelligent security tool that automates reconnaissance and vulnerability scanning, helping developers identify threats before they become problems.",
    lang: "Python, AI",
  },
  {
    img: `${getImagePrefix()}image/projects/jarvis-ai.jpg`,
    title: "Jarvis AI (Amini)",
    desc: "A voice-activated desktop assistant that streamlines daily tasks and controls applications, making interaction with your PC smarter and hands-free.",
    lang: "Python, Automation",
  },
  {
    img: `${getImagePrefix()}image/projects/deepfake-detector.png`,
    title: "Deepfake Detector",
    desc: "A platform dedicated to truth in media, using advanced forensic techniques to distinguish authentic content from deepfake manipulations.",
    lang: "Python, ML",
  },
  {
    img: `${getImagePrefix()}image/projects/medicare.png`,
    title: "MediCare",
    desc: "A comprehensive healthcare management system designed to secure patient data while making appointment scheduling effortless.",
    lang: "Flutter",
  },
  {
    img: `${getImagePrefix()}image/projects/tabguard.png`,
    title: "TabGuard Extension",
    desc: "A browser shield that keeps your sessions private and prevents accidental data loss, ensuring your browsing habits remain yours alone.",
    lang: "JavaScript",
  },
  {
    img: `${getImagePrefix()}image/projects/steganography.png`,
    title: "Steganography Tool",
    desc: "Uncovering the unseen. A digital forensics tool that detects hidden data within files, essential for investigation and secure communication.",
    lang: "Java",
  },
  {
    img: `${getImagePrefix()}image/projects/invisible-cloak.png`,
    title: "Invisible Cloak",
    desc: " Bringing fantasy to life with computer vision. A real-time application that mimics an invisibility cloak using dynamic background subtraction.",
    lang: "Python, OpenCV",
  },
  {
    img: `${getImagePrefix()}image/projects/password-checker.png`,
    title: "Password Strength Checker",
    desc: "More than just a validator. A visual, cyberpunk-themed analyzer that educates users on password security through real-time feedback.",
    lang: "Cybersecurity",
  },
  {
    img: `${getImagePrefix()}image/projects/blockchain.png`,
    title: "Minimal Blockchain",
    desc: "Demystifying the chain. A clean, educational implementation of blockchain fundamentals including mining and transaction verification.",
    lang: "Python",
  },
  {
    img: `${getImagePrefix()}image/projects/3d-render.png`,
    title: "Simple 3D Render Engine",
    desc: "A purely code-driven 3D rendering engine built from scratch to demonstrate the mathematical foundations of computer graphics.",
    lang: "Java",
  },
  {
    img: `${getImagePrefix()}image/projects/ccr.png`,
    title: "CCR",
    desc: "Empowering children with cognitive challenges through gamified exercises and EEG tracking, making therapy engaging and measurable.",
    lang: "React, EEG",
  },
];

export function Projects() {
  return (
    <section className="py-16 md:py-28 px-8 bg-black">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="white" className="mb-4 font-bold text-4xl">
          Featured <span className="text-red-500">Projects</span>
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-400 lg:w-6/12"
        >
          Selected works showcasing secure architecture, automation, and problem-solving.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((props, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <ProjectCard {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
