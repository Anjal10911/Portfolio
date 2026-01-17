"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Web & Backend Development",
    children:
      "HTML, CSS, JavaScript, React.js, Next.js, Node.js REST APIs, JWT building responsive and accessible web applications.",
  },
  {
    icon: FingerPrintIcon,
    title: "Cybersecurity & Tools",
    children:
      "Kali Linux, Nmap,OWASP Top 10, Secure Coding Wireshark, Burp Suite vulnerability discovery, network analysis, and web app security testing.",
  },
  {
    icon: SwatchIcon,
    title: "AI/ML & LLMs",
    children:
      "Experience integrating LLMs, ML workflows, and building AI-powered automation for security workflows.",
  },
  {
    icon: HashtagIcon,
    title: "Mobile & Cross-platform",
    children:
      "Flutter and mobile integrations building cross-platform apps and voice-enabled assistants.",
  },
  {
    icon: EyeIcon,
    title: "DevOps & Cloud",
    children:
      "Docker, AWS, CI/CD, Git deployment, automation, Cloud Computing and scalable app infrastructure.",
  },
  {
    icon: DocumentTextIcon,
    title: "Other Tools",
    children: "OpenCV, Three.js, Firebase, Jupyter, Figma, Arduino, Ubuntu/Linux CLI",
  },
];

import { motion } from "framer-motion";

export function Skills() {
  return (
    <section className="px-8 py-16 md:py-28 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography className="mb-2 font-bold uppercase text-red-500 tracking-wider">
            Skills & Technical Focus
          </Typography>
          <Typography variant="h1" className="mb-4 text-white">
            What I bring to the table
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-300 lg:w-10/12 text-lg leading-relaxed"
          >
            I bring a software engineering mindset grounded in security first thinking. I design and build full stack systems where backend reliability, data integrity, and secure access control are treated as fundamentals, not add ons. I’m comfortable owning features end-to-end, making technical trade offs, and translating real world requirements into production ready systems.
          </Typography>
        </motion.div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="h-full"
          >
            <SkillCard {...props} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
