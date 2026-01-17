"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

interface AwardItem {
    title: string;
    organization: string;
    date: string;
    description: string;
    image: string;
    rank?: string;
    rotation?: string;
}

const AWADS_DATA: AwardItem[] = [
    {
        title: "Internship Offer Letter",
        organization: "CCITR, CID HQ",
        date: "Aug 2025",
        description: "Selected for Phase VI internship at CID Headquarters after securing top rank in CIDECODE Hackathon.",
        rank: "Official Offer",
        image: "internship-offer.png"
    },
    {
        title: "CIDECODE Hackathon Winner",
        organization: "Centre for CCITR",
        date: "Mar 2025",
        description: "Awarded winning certificate for the Deepfake Detection project.",
        rank: "Winner",
        image: "cidecode-winner.png"
    },
    {
        title: "Internship Certification",
        organization: "CCITR, CID Karnataka",
        date: "Sep 2025",
        description: "Successful completion of 2-month internship developing a Deepfake Detection Tool MVP.",
        rank: "Certified",
        image: "internship-certificate.png",
    },
    {
        title: "Certificate Distribution",
        organization: "CID Headquarters",
        date: "Sep 2025",
        description: "Received internship certificate from SP Saidulu Adavath, IPS, for the Deepfake Detection Tool project.",
        rank: "Honored",
        image: "internship-photo.jpg"
    },
    {
        title: "First Place Project and Research Expo 2025",
        organization: "Global Minds",
        date: "Oct 2025",
        description: "Presented Deepfake Detection in Multimedia and recognized for technical depth and practical relevance.",
        rank: "1st Place",
        image: "project-research-expo.png",
    },
    {
        title: "Third Place CIDECODE Hackathon",
        organization: "Centre for CCITR & PES University",
        date: "Mar 2025",
        description: "Developed a deepfake detection solution leading to an internship opportunity with CID Karnataka.",
        rank: "3rd Place",
        image: "cidecode.png"
    },
    {
        title: "Second Place TECH TALK Competition",
        organization: "E3 Cube Club, SVCE",
        date: "Nov 2024",
        description: "Recognized for communication skills and technical articulation.",
        rank: "2nd Place",
        image: "tech-talk.png"
    },
    {
        title: "Second Prize Sai Taranga 2024",
        organization: "Sri Sairam College of Engineering",
        date: "May 2024",
        description: "Published a research paper on the Golden Ratio in Art and Nature.",
        rank: "2nd Prize",
        image: "sai-taranga-award.png"
    },
    {
        title: "Certificate of Publication",
        organization: "Sri Sairam College of Engineering",
        date: "May 2024",
        description: "Official publication of research on mathematical patterns in nature.",
        rank: "Published",
        image: "sai-taranga-award.png"
    }
];

export function Awards() {
    return (
        <section className="py-28 px-8" id="awards">
            <div className="container mx-auto mb-20 text-center">
                <Typography variant="h2" color="white" className="mb-4 font-bold text-4xl">
                    Achievements and <span className="text-red-500">Recognition</span>
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto w-full !text-gray-400 lg:w-10/12"
                >
                    Key milestones in my journey.
                </Typography>
            </div>

            <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {AWADS_DATA.map((props, idx) => (
                    <AwardCard key={idx} {...props} />
                ))}
            </div>
        </section>
    );
}

import { motion } from "framer-motion";

function AwardCard({ title, organization, date, description, image, rank, rotation }: AwardItem) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="h-full"
        >
            <Card className="glass-card border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-red-500/50 transition-all duration-300 group h-full flex flex-col">
                <CardBody className="p-0 h-full flex flex-col">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-800 group-hover:h-64 transition-all duration-500 ease-in-out">
                        {image ? (
                            <Image
                                width={768}
                                height={768}
                                src={`${getImagePrefix()}image/certificates/${image}`}
                                alt={title}
                                className={`h-full w-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ${rotation || ""}`}
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-red-900/20 to-black">
                                <Typography color="white" className="font-bold opacity-30 text-4xl">
                                    2025
                                </Typography>
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90" />
                    </div>

                    <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <Typography variant="small" className="font-bold text-red-500 mb-1 uppercase tracking-wider text-xs">
                                    {organization}
                                </Typography>
                                <Typography variant="h5" color="white" className="font-bold mb-1 leading-snug">
                                    {title}
                                </Typography>
                            </div>
                            <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg ml-2 whitespace-nowrap">
                                {rank}
                            </div>
                        </div>
                        <Typography variant="small" className="text-gray-400 font-medium mb-2 block">
                            {date}
                        </Typography>

                        <Typography className="text-gray-300 font-normal text-sm leading-relaxed mt-auto">
                            {description}
                        </Typography>
                    </div>
                </CardBody>
            </Card>
        </motion.div>
    );
}

export default Awards;
