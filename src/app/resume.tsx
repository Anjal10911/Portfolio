"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";
import { motion } from "framer-motion";

const RESUME_ITEMS = [
  {
    icon: PuzzlePieceIcon,
    children: (
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-1 text-gray-200">
          Developer Intern, Criminal Investigation Department (CID), Karnataka
        </Typography>
        <Typography className="mb-2 font-normal text-gray-400 uppercase text-xs tracking-wider">
          Aug 2025 – Sep 2025
        </Typography>
        <Typography className="font-normal text-gray-400">
          Worked on internal software systems and investigative tools for cybercrime analysis. Built and validated secure, production-grade prototypes focused on media forensics, data handling, and investigative automation. Developed a <a href="https://github.com/Anjal10911/Deepfake-Detection-CID" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold transition-colors">multi-modal deepfake detection system</a> covering image, audio, and audio-video analysis with ~95% accuracy. Contributed across backend APIs, frontend interfaces, and model integration. Collaborated directly with DSP and IPS officers to translate operational requirements into reliable technical solutions.
        </Typography>
      </div>
    ),
  },
  {
    icon: ChartBarIcon, // Using ChartBarIcon for Strategy/Leadership representation
    children: (
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-1 text-gray-200">
          Vice Leader - The Checkmates (College Chess Club)
        </Typography>
        <Typography className="mb-2 font-normal text-gray-400 uppercase text-xs tracking-wider">
          Sri Venkateshwara College of Engineering
        </Typography>
        <Typography className="font-normal text-gray-400">
          Led and coordinated club activities, competitive events, and team strategy planning. Contributed to building the <a href="https://checkmate-three-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 font-semibold transition-colors">official club website</a> and supported technical and organizational operations. Demonstrated leadership, strategic thinking, and team coordination beyond academics.
        </Typography>
      </div>
    ),
  },
  {
    icon: CursorArrowRaysIcon,
    children: (
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-1 text-gray-200">
          Bachelor of Engineering, Computer Science & Engineering (Cyber Security)
        </Typography>
        <Typography className="mb-2 font-normal text-gray-400 uppercase text-xs tracking-wider">
          Expected Graduation: 2027
        </Typography>
        <Typography className="font-normal text-gray-400">
          Sri Venkateshwara College of Engineering, Bangalore
        </Typography>
      </div>
    ),
  },
];

export function Resume() {
  return (
    <section className="px-8 py-16 md:py-24 bg-black">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1 animate-fade-in-up">
          <Typography variant="h2" color="white" className="mb-4 font-bold text-4xl">
            Career & <span className="text-red-500">Education</span>
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-300">
            Computer Science graduate with a specialization in Cyber Security.
            Experience building secure web apps and AI-assisted tools for
            vulnerability discovery and cybercrime detection. Passionate about
            practical security research, automation, and creating resilient
            systems.
          </Typography>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              variant="text"
              className="flex items-center gap-2 text-red-500 hover:text-red-400"
            >
              Resume
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5"
              />
            </Button>
          </a>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <ResumeItem {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
