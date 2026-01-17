"use client";

import { Typography, Card, CardBody, Chip } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getImagePrefix } from "../../utils/utils";

interface CertificateItem {
    title: string;
    organization: string;
    date: string;
    skills?: string[];
    credentialId?: string;
    image?: string;
}

const CERTIFICATES_DATA: CertificateItem[] = [
    {
        title: "Ethical Hacker",
        organization: "Cisco Networking Academy",
        date: "Aug 2025",
        skills: ["Ethical Hacking"],
        image: "cert-cisco-ethical-hacker.png",
    },
    {
        title: "NASA Space App Hackathon",
        organization: "NASA - National Aeronautics and Space Administration",
        date: "Oct 2024",
        skills: ["HTML", "CSS", "JavaScript", "Three.js"],
        image: "cert-nasa-space-apps.png",
    },
    {
        title: "Code Red",
        organization: "IEEE NITK",
        date: "Sep 2024",
        skills: ["DSA", "Machine Learning"],
        image: "cert-code-red.png",
    },
    {
        title: "Flipkart grid-6.0",
        organization: "Flipkart",
        date: "Aug 2024",
        skills: ["Analytical Skills"],
        image: "cert-flipkart-grid.png",
    },
    {
        title: "GenAI (Google Cloud)",
        organization: "Google Developers Group",
        date: "May 2024",
        skills: ["Problem Solving"],
        image: "cert-google-genai.png",
    },
    {
        title: "Hands on workshop on IoT & Embedded system",
        organization: "IobiT Solutions / IETE-Bengaluru",
        date: "May 2024",
        skills: ["Arduino", "IoT", "Arduino IDE"],
        image: "cert-iobit-iot.png",
    },
    {
        title: "Azure Data Fundamentals",
        organization: "Microsoft",
        date: "Mar 2024",
        skills: ["Microsoft Azure", "Cloud Skills"],
        image: "cert-microsoft-azure.png",
    },
    {
        title: "Girl Geek Hackathon",
        organization: "IEEE NITK",
        date: "Dec 2023",
        skills: ["Web Development"],
        image: "cert-girl-geek.png",
    },
    {
        title: "Java (DSA)",
        organization: "Apna College",
        date: "Aug 2023",
        skills: ["OOP", "Java", "DSA", "DBMS", "Problem Solving"],
        image: "cert-apna-java.png",
    },
    {
        title: "TCS iON Career Edge - Young Professional",
        organization: "Tata Consultancy Services",
        date: "Aug 2023",
        credentialId: "119854-24731697-1016",
        skills: ["Business Strategy", "Accounting Fundamentals"],
        image: "cert-tcs-career-edge.png",
    },
];

export function Certifications() {
    return (
        <section className="py-28 px-8" id="certifications">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" color="white" className="mb-4 font-bold text-4xl">
                    Licenses & <span className="text-red-500">Certifications</span>
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-400 lg:w-10/12"
                >
                    Professional credentials and technical milestones.
                </Typography>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {CERTIFICATES_DATA.map((props, idx) => (
                    <CertificateCard key={idx} {...props} index={idx} />
                ))}
            </div>
        </section>
    );
}

function CertificateCard({ title, organization, date, skills, credentialId, image, index }: CertificateItem & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="glass-card border border-gray-800 bg-gray-900/50 hover:border-red-500/30 transition-all duration-300 h-full">
                <CardBody className="flex flex-col h-full p-6">
                    <div className="flex flex-col mb-4">
                        {image && (
                            <div className="relative h-40 w-full mb-4 rounded-lg overflow-hidden bg-gray-800">
                                <Image
                                    src={`${getImagePrefix()}image/certificates/${image}`}
                                    alt={title}
                                    width={500}
                                    height={300}
                                    className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        )}
                        <div className="flex-1">
                            <Typography variant="small" className="font-bold text-red-500 mb-1 uppercase tracking-wider text-xs">
                                {organization}
                            </Typography>
                            <Typography variant="h5" color="white" className="font-bold mb-1 leading-snug">
                                {title}
                            </Typography>
                        </div>
                    </div>

                    <Typography className="text-gray-400 text-sm mb-4 font-medium">
                        Issued {date}
                    </Typography>

                    {credentialId && (
                        <Typography className="text-gray-500 text-xs mb-4">
                            ID: {credentialId}
                        </Typography>
                    )}

                    <div className="mt-auto flex flex-wrap gap-2">
                        {skills?.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-gray-800/80 rounded-full text-xs font-medium text-gray-300 border border-gray-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
}

export default Certifications;
