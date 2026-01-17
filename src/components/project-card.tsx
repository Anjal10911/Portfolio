"use client";

import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  lang: string;
}

export function ProjectCard({ img, title, desc, lang }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="h-full"
    >
      <Card color="transparent" shadow={false} className="h-full bg-gray-900 border border-gray-800 hover:border-red-600 transition-colors">
        <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48 bg-gray-900 overflow-hidden relative">
          <Image
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        </CardHeader>
        <CardBody className="p-6 pt-0">
          <a
            href="#"
            className="text-blue-gray-900 transition-colors hover:text-red-500"
          >
            <Typography variant="h5" className="mb-2 text-white font-bold group-hover:text-red-400">
              {title}
            </Typography>
          </a>
          <Typography className="mb-4 font-normal !text-gray-400 text-sm leading-relaxed min-h-[3rem]">
            {desc}
          </Typography>
          <div className="flex items-center gap-2 mt-auto">
            <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.8)]"></span>
            <Typography className="text-gray-500 text-xs font-bold uppercase tracking-wider">
              {lang}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ProjectCard;
